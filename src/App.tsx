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
      <UseRefDemo />
    </>
  );
}

export default App;
