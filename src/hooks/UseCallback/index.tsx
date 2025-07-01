// 在React中，函数组件的重新渲染会导致组件内的函数被重新创建，这可能会导致性能问题。
// useCallback 通过缓存函数，可以减少不必要的重新渲染，提高性能。

import React, { useCallback, useState } from "react";

const Child = React.memo(
  ({
    user,
    callback,
  }: {
    user: { name: string; age: number };
    callback: () => void;
  }) => {
    console.log("Render Child");
    const styles = {
      color: "red",
      fontSize: "20px",
    };
    return (
      <div style={styles}>
        <div>{user.name}</div>
        <div>{user.age}</div>
        <button onClick={callback}>callback</button>
      </div>
    );
  }
);

const functionMap = new WeakMap();
let counter = 1;

export const UseCallbackDemo = () => {
  const [searchOne, setSearchOne] = useState("");
  const [searchTwo, setSearchTwo] = useState("");
  const [user, setUser] = useState({
    name: "John",
    age: 20,
  });

  const childCallback = useCallback(() => {
    console.log("callback 执行了");
  }, []);

  const changeSearch = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchOne(e.target.value);
  }, []);

  if (!functionMap.has(changeSearch)) {
    functionMap.set(changeSearch, counter++);
  }
  console.log("函数Id", functionMap.get(changeSearch));

  return (
    <>
      <input type="text" value={searchOne} onChange={changeSearch} />
      <hr />
      <input
        type="text"
        value={searchTwo}
        onChange={(e) => setSearchTwo(e.target.value)}
      />
      <Child callback={childCallback} user={user} />
    </>
  );
};
