import { useReducer, useState } from "react";

// 针对 UseReducer 的类型和 reducer
const counterInitState = {
  count: -1,
};
type CounterState = typeof counterInitState;
type CounterAction = { type: "add" | "sub" };

const counterReducer = (
  state: CounterState,
  action: CounterAction
): CounterState => {
  switch (action.type) {
    case "add":
      return { count: state.count + 1 };
    case "sub":
      return { count: state.count - 1 };
    default:
      return state;
  }
};

export function UseReducer() {
  const [state, dispatch] = useReducer(counterReducer, counterInitState);
  return (
    <div>
      <button onClick={() => dispatch({ type: "add" })}>+1</button>
      <button onClick={() => dispatch({ type: "sub" })}>-1</button>
      <div>{state.count}</div>
    </div>
  );
}

// 针对 UseReducerDemo 的 reducer 和类型
type Product = {
  id: string;
  name: string;
  price: number;
  count: number;
  isEdit: boolean;
};

interface Action {
  type: "ADD" | "SUB" | "DELETE" | "EDIT" | "UPDATE_NAME";
  id: string;
  newName?: string;
}

const initData: Product[] = [
  { id: "1", name: "iPhone", price: 9.9, count: 100, isEdit: false },
  { id: "2", name: "oppo", price: 19.9, count: 100, isEdit: false },
  { id: "3", name: "华为", price: 25.9, count: 100, isEdit: false },
  { id: "4", name: "小米", price: 125.9, count: 100, isEdit: false },
];

const productReducer = (state: Product[], action: Action): Product[] => {
  console.log("Reducer called with action:", action);
  switch (action.type) {
    case "ADD":
      return state.map((item) =>
        item.id === action.id ? { ...item, count: item.count + 1 } : item
      );

    case "SUB":
      return state.map((item) =>
        item.id === action.id ? { ...item, count: item.count - 1 } : item
      );

    case "DELETE":
      return state.filter((item) => item.id !== action.id);

    case "EDIT":
      return state.map((item) =>
        item.id === action.id ? { ...item, isEdit: !item.isEdit } : item
      );

    case "UPDATE_NAME":
      return state.map((item) =>
        item.id === action.id ? { ...item, name: action?.newName } : item
      );

    default:
      return state;
  }
};

export function UseReducerDemo() {
  const [data, dispatch] = useReducer(productReducer, initData);
  return (
    <>
      <table cellPadding={0} cellSpacing={0} width={600} border={1}>
        <thead>
          <tr>
            <th>物品</th>
            <th>价格</th>
            <th>数量</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => {
            return (
              <tr key={item.id}>
                <td align="center">
                  {item.isEdit ? (
                    <input
                      onBlur={(e) => dispatch({ type: "EDIT", id: item.id })}
                      onChange={(e) =>
                        dispatch({
                          type: "UPDATE_NAME",
                          id: item.id,
                          newName: e.target.value,
                        })
                      }
                      value={item.name}
                    />
                  ) : (
                    <span>{item.name}</span>
                  )}
                </td>
                <td align="center">{item.price * item.count}</td>
                <td align="center">
                  <button
                    onClick={() => dispatch({ type: "SUB", id: item.id })}
                  >
                    -
                  </button>
                  <span>{item.count}</span>
                  <button
                    onClick={() => dispatch({ type: "ADD", id: item.id })}
                  >
                    +
                  </button>
                </td>
                <td align="center">
                  <button
                    onClick={() => dispatch({ type: "EDIT", id: item.id })}
                  >
                    编辑
                  </button>
                  <button
                    onClick={() => dispatch({ type: "DELETE", id: item.id })}
                  >
                    删除
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={3}></td>
            <td align="center">
              总价:
              {data.reduce((prev, next) => prev + next.price * next.count, 0)}
            </td>
          </tr>
        </tfoot>
      </table>
    </>
  );
}
