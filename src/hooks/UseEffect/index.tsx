import { useEffect, useState } from "react";

const Child = (props: { name: string }) => {
  useEffect(() => {
    console.log("render", props.name);
    // 返回一个清理函数
    return () => {
      console.log("unmount", props.name);
    };
  }, [props.name]);
  return <div>Child:{props.name}</div>;
};

const useEffectDemo = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [show, setShow] = useState(true);
  // 组件更新时执行
  // useEffect(() => {
  //   console.log("执行了", count, name);
  // });

  // 有依赖项更新
  // useEffect(() => {
  //   console.log("执行了", count, name);
  // }, [count]); //当count发生改变时执行

  useEffect(() => {
    console.log("执行了", count, name);
  }, []); //只会执行一次

  return (
    <>
      <h3>useEffect</h3>
      <div style={{ border: "1px solid red" }}>
        <div id="data">
          <div>
            <h3>count:{count}</h3>
            <button onClick={() => setCount(count + 1)}>+</button>
          </div>
          <hr />
          <div>
            <h3>name:{name}</h3>
            <input value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <hr />
          <br />
          <div>
            <button onClick={() => setShow(!show)}>显示/隐藏</button>
            <h3>子组件</h3>
            {show && <Child name={name} />}
          </div>
        </div>
        <br />
      </div>
    </>
  );
};
export default useEffectDemo;
