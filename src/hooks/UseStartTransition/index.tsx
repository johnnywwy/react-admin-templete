import { useState, useTransition } from "react";
import { Input, List } from "antd";

interface Iitem {
  id: string;
  name: string;
  address: string;
  age: number;
}
export const UseStartTransitionDemo = () => {
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
};
