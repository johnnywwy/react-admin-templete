// import { useState } from 'react'

// import './App.css'
import { useState } from "react";
import Card from "./components/Card";
import Card2 from "./components/Card2";

const fn = (params: string) => {
  console.log("我是父组件的方法", params);
};

function App() {
  // 基本类型赋值
  const [name, setName] = useState("小伟");
  const handleClick = () => {
    setName("大伟");
  };

  // 高级类型赋值
  const [arr, setArr] = useState([1, 2, 3, 4]);
  const handleArr = () => {
    //插入数组
    // setArr([...arr, 5])

    // 删除数组
    const newArr = arr.filter((item) => item < 4);
    const newArr2 = arr.slice(0, -1);
    // setArr(newArr2)

    const newArr3 = arr.map((item) => item + 1);
    setArr(newArr3);
  };

  const [obj, setObj] = useState({ name: "小伟", age: 18, subject: "数学" });
  const handleObj = () => {
    setObj({ ...obj, subject: "英语" });
  };

  let [index, setIndex] = useState(0);
  const heandleClick = () => {
    setIndex(index + 1); //1
    setIndex(index + 1); //1
    setIndex(index + 1); //1

    // setIndex(index => index + 1) //1
    // setIndex(index => index + 1) //2
    // setIndex(index => index + 1) //3
    console.log(index, "index");
  };
  return (
    <>
      <div>
        <h1>Index:{index}</h1>
        <button onClick={heandleClick}>更改值</button>
      </div>
      <div>{name}</div>
      <button onClick={handleClick}>改名字</button>
      <br />
      <div>{arr}</div>
      <button onClick={handleArr}>插入数据</button>
      <div>
        <h1>{obj.name}</h1>
        <h1>{obj.age}</h1>
        <h1>{obj.subject}</h1>
        <button onClick={handleObj}>插入数据</button>
      </div>

      <Card title="我喜欢男的" subTitle="假的" callback={fn}>
        <div>骗你的</div>
      </Card>
      <Card2 title="我喜欢女的" subTitle="真的">
        <div>没骗你 哈哈哈</div>
      </Card2>
    </>
  );
}

export default App;
