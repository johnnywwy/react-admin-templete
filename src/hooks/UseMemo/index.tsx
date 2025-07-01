import React, { useMemo, useState } from "react";

export const UseMemoDemo = () => {
  console.log("你会重新渲染吗");

  const [search, setSearch] = useState("");
  const [goods, setGoods] = useState([
    { id: 1, name: "苹果", price: 10, count: 1 },
    { id: 2, name: "香蕉", price: 20, count: 1 },
    { id: 3, name: "橘子", price: 30, count: 1 },
  ]);
  const handleAdd = (id: number) => {
    setGoods(
      goods.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      )
    );
  };
  const handleSub = (id: number) => {
    setGoods(
      goods.map((item) =>
        item.id === id ? { ...item, count: item.count - 1 } : item
      )
    );
  };
  const total = useMemo(() => {
    console.log("total");
    return goods.reduce((total, item) => total + item.price * item.count, 0);
  }, [goods]);

  return (
    <div>
      <h1>父组件</h1>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <table border={1} cellPadding={5} cellSpacing={0}>
        <thead>
          <tr>
            <th>商品名称</th>
            <th>商品价格</th>
            <th>商品数量</th>
          </tr>
        </thead>
        <tbody>
          {goods.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.price * item.count}</td>
              <td>
                <button onClick={() => handleAdd(item.id)}>+</button>
                <span>{item.count}</span>
                <button onClick={() => handleSub(item.id)}>-</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2>总价：{total}</h2>
    </div>
  );
};
