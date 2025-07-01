import { useState, useTransition } from "react";
// import './App.css'
import UseEffectDemo from "./hooks/UseEffect";
import UseStateDemo from "./hooks/UseState";
import UseEffectFetch from "./hooks/UseEffect/request";
import { UseReducer, UseReducerDemo } from "./hooks/UseReducer";
import { useStorage } from "./hooks/UseStroage";
import { UseHistoryDemo } from "./hooks/UseHistory";
import { UseStartTransitionDemo } from "./hooks/UseStartTransition";
import { UseDeferredValueDemo } from "./hooks/UseDeferredValue";
import { UseRefDemo } from "./hooks/UseRef";
import { UseImperativeHandleDemo } from "./hooks/UseImperativeHandle";
import { UseContextDemo } from "./hooks/UseContext";
import { MemoDemo } from "./hooks/Memo";
import { UseMemoDemo } from "./hooks/UseMemo";
import { UseCallbackDemo } from "./hooks/UseCallback";

interface Iitem {
  id: string;
  name: string;
  address: string;
  age: number;
}

function App() {
  return (
    <>
      {/* <UseStateDemo /> */}
      {/* <UseEffectDemo /> */}
      {/* <UseEffectFetch /> */}
      {/* <UseReducer /> */}
      {/* <UseReducerDemo /> */}
      {/* UseReducerDemo */}
      {/* <UseHistoryDemo /> */}
      {/* <UseStartTransitionDemo /> */}
      {/* <UseDeferredValueDemo /> */}
      {/* <UseRefDemo /> */}
      {/* <UseImperativeHandleDemo /> */}
      {/* <UseContextDemo /> */}
      {/* <MemoDemo /> */}
      {/* <UseMemoDemo /> */}
      <UseCallbackDemo />
    </>
  );
}

export default App;
