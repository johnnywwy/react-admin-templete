// import { useState } from 'react'
// import './App.css'
import UseEffectDemo from "./hooks/UseEffect";
import UseStateDemo from "./hooks/UseState";
import UseEffectFetch from "./hooks/UseEffect/request";
import { UseReducer, UseReducerDemo } from "./hooks/UseReducer";
import { useStorage } from "./hooks/UseStroage";
import { useHistory } from "./hooks/UseHistory";

UseEffectFetch;
function App() {
  const [val, setVal] = useStorage("data", 1);

  const [url, push, replace] = useHistory();

  return (
    <>
      {/* <UseStateDemo /> */}
      {/* <UseEffectDemo /> */}
      {/* <UseEffectFetch /> */}
      {/* <UseReducer /> */}
      {/* <UseReducerDemo /> */}
      {/* UseReducerDemo */}
      {/* <h3>{val}</h3> */}
      {/* <button onClick={() => setVal(val + 1)}>设置val</button> */}

      <hr />
      <h2>当前url：{url}</h2>
      <button onClick={() => push("/xxxx")}>push</button>
      <button onClick={() => replace("/yyyy")}>replace</button>
      <hr />
    </>
  );
}

export default App;
