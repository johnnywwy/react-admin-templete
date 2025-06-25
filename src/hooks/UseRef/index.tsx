import { useRef, useState } from "react";

export const UseRefDemo = () => {
  // null 1、表示空对象 2、垃圾回收机制
  const ref = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    ref.current!.style.color = "pink";
    console.log("ref", ref);
  };

  // -------------------------------------------
  const num = useRef(0);
  const [count, setCount] = useState(0);
  const handleCount = () => {
    setCount(count + 1);
    num.current = count;
  };
  return (
    <>
      <div>
        <h1>hello world</h1>
        <div ref={ref}>大伟聊前端</div>
        <button onClick={handleClick}>点赞</button>
      </div>
      <hr />
      <div>
        <h1>数据存储</h1>
        <div>
          {count}: {num}
        </div>
        <button onClick={handleCount}>+1</button>
      </div>
    </>
  );
};
