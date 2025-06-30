// 可以在子组件内部暴露给父组件句柄
// 父组件可以调用子组件的方法，或者访问子组件的属性。 如果你学过Vue，
// 就类似于Vue的defineExpose。

// 18版本需要配合forwardRef一起使用
// forwardRef包装之后，会有两个参数，第一个参数是props，第二个参数是ref
// 我们使用的时候只需要将ref传递给useImperativeHandle即可，然后useImperativeHandle 就可以暴露子组件的方法或属性给父组件， 然后父组件就可以通过ref调用子组件的方法或访问子组件的属性

import { forwardRef, useImperativeHandle, useRef, useState } from "react";

interface ChildRef {
  name: string;
  count: number;
  addCount: () => void;
  subCount: () => void;
}

export const UseImperativeHandleChild = forwardRef<ChildRef>((_, ref) => {
  const [count, setCount] = useState(0);
  //重点
  useImperativeHandle(ref, () => {
    return {
      name: "child",
      count,
      addCount: () => setCount(count + 1),
      subCount: () => setCount(count - 1),
    };
  });

  return (
    <div>
      <h3>我是子组件</h3>
      <div>count:{count}</div>
      <button onClick={() => setCount(count + 1)}>增加</button>
      <button onClick={() => setCount(count - 1)}>减少</button>
    </div>
  );
});

export const UseImperativeHandleDemo = () => {
  const childRef = useRef<ChildRef>(null);
  const showRefInfo = () => {
    console.log(childRef.current);
  };
  return (
    <div>
      <h2>我是父组件</h2>
      <button onClick={showRefInfo}>获取子组件信息</button>
      <button onClick={() => childRef.current?.addCount()}>操作子组件+1</button>
      <button onClick={() => childRef.current?.subCount()}>操作子组件-1</button>
      <hr />
      <UseImperativeHandleChild ref={childRef}></UseImperativeHandleChild>
    </div>
  );
};
