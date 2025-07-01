// useMemo
// useMemo 是 React 提供的一个性能优化 Hook。它的主要功能是避免在每次渲染时执行复杂的计算和对象重建。
// 通过记忆上一次的计算结果，仅当依赖项变化时才会重新计算，提高了性能，有点类似于Vue的computed。
//
// React.memo
// React.memo 是一个 React API，用于优化性能。它通过记忆上一次的渲染结果，仅当 props 发生变化时才会重新渲染, 避免重新渲染。

import React, { useMemo, useState } from "react";

interface User {
  name: string;
  age: number;
  email: string;
  job: string;
}
interface CardProps {
  user: User;
}

const Card = React.memo(({ user }: CardProps) => {
  const styles = {
    backgroundColor: "pink",
    padding: "15px",
    borderRadius: "5px",
    margin: "8px",
  };
  console.log("我是不是被重新渲染了");
  return (
    <div style={styles}>
      <h1> 姓名：{user.name}</h1>
      <p>年龄：{user.age}</p>
      <p>邮箱：{user.email}</p>
      <p>职业：{user.job}</p>
    </div>
  );
});

export const MemoDemo = () => {
  const [user, setUser] = useState<User>({
    name: "大伟",
    age: 28,
    email: "163.com",
    job: "fe",
  });
  const [search, setSearch] = useState("");
  return (
    <div>
      <h1>父组件</h1>
      <input value={search} onChange={(e) => setSearch(e.target.value)} />
      <div>
        <button
          onClick={() =>
            setUser({
              name: "李四",
              age: Math.random() * 100,
              email: "lisi@example.com",
              job: "BE",
            })
          }
        >
          更新user
        </button>
      </div>
      <Card user={user} />
    </div>
  );
};
