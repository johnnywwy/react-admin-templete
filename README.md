## 1、React 开发环境搭建

react 搭建环境 pnpm create vite

## 2、React 组件

- Card 组件

```css
.card {
  background: white;
  border-radius: 5px;
  border: 1px solid #ccc;
  max-width: 400px;
  box-shadow: 2px 2px 2px #ccc;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ccc;
    padding: 12px;
    background: #4ba1f8;
    color: white;

    .title {
      color: #000;
      font-weight: 700;
      font-size: 20px;
    }

    .subTitle {
      color: #fff;
      font-size: 14px;
    }
  }

  main {
    min-height: 200px;
    border-bottom: 1px solid #ccc;
    padding: 10px;
  }
  footer {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 10px;
    button {
      background: #2e95fc;
      margin-left: 10px;
      padding: 3px 10px;
      color: #fff;
    }
  }
}
```

```tsx
import "./index.css";

export default function Card() {
  return (
    <div className="card">
      <header>
        <div className="title">标题</div>
        <div className="subTitle">副标题</div>
      </header>
      <main>内容区域</main>
      <footer>
        <button onClick={() => window.onShow()}>确认</button>
        <button>取消</button>
      </footer>
    </div>
  );
}
```

- Message 组件

```css
.message {
  background: #0885ff;
  color: #fff;
  width: 160px;
  height: 30px;
  position: fixed;
  top: 10px;
  left: 50%;
  margin-left: -80px;
  border: 1px solid #ccc;
  text-align: center;
  line-height: 30px;
  border-radius: 5px;
}
```

```tsx
import ReactDom from "react-dom/client";
import "./index.css";

interface Itesm {
  messageContainer: HTMLDivElement;
  root: ReactDom.Root;
}
const queue: Itesm[] = [];

const Message = () => {
  return <div>提示组件</div>;
};

window.onShow = () => {
  const messageContainer = document.createElement("div");
  messageContainer.className = "message";
  messageContainer.style.top = `${queue.length * 50}px`;
  document.body.appendChild(messageContainer);
  // 容器如何关联
  // 容器注册成根组件
  const root = ReactDom.createRoot(messageContainer);
  root.render(<Message />); //渲染组件
  queue.push({
    messageContainer,
    root,
  });
  //2秒后移除
  setTimeout(() => {
    const item = queue.find(
      (item) => item.messageContainer === messageContainer
    )!;
    item.root.unmount(); //卸载
    document.body.removeChild(item.messageContainer);
    queue.splice(queue.indexOf(item), 1);
  }, 2000);
};

//声明扩充
declare global {
  interface Window {
    onShow: () => void;
  }
}

export default Message;
```

在 main.tsx 注入即可使用 import './components/Message/index.tsx'
