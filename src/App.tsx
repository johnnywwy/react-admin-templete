import { useState, useTransition } from "react";
// import './App.css'
import UseEffectDemo from "./hooks/UseEffect";
import UseStateDemo from "./hooks/UseState";
import UseEffectFetch from "./hooks/UseEffect/request";
import { UseReducer, UseReducerDemo } from "./hooks/UseReducer";
import { useStorage } from "./hooks/UseStroage";
import { useHistory } from "./hooks/UseHistory";
import { Input, List } from "antd";

interface Iitem {
  id: string;
  name: string;
  address: string;
  age: number;
}

function App() {
  const [val, setVal] = useStorage("data", 1);

  const [url, push, replace] = useHistory();

  const [list, setList] = useState<Iitem[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isPending, startTransition] = useTransition();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setInputValue(val);
    fetch("/api/mock/list?key=" + val)
      .then((res) => res.json())
      .then((res) => {
        startTransition(() => {
          setList(res.list);
        });
      });
  };
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

      {/* <hr />
      <h2>当前url：{url}</h2>
      <button onClick={() => push("/xxxx")}>push</button>
      <button onClick={() => replace("/yyyy")}>replace</button>
      <hr /> */}

      <hr />
      <Input value={inputValue} onChange={handleChange} />
      {isPending && <div>loading...</div>}
      <List
        dataSource={list}
        renderItem={(item) => (
          <List.Item>
            {item.name}
            <br />
            {item.address}
          </List.Item>
        )}
      />
    </>
  );
}

export default App;
