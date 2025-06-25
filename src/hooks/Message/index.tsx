import ReactDom from 'react-dom/client'
import './index.css'

interface Itesm {
  messageContainer: HTMLDivElement
  root: ReactDom.Root
}
const queue: Itesm[] = []

const Message = () => {
  return (
    <div>
      提示组件
    </div>
  )
}

window.onShow = () => {
  const messageContainer = document.createElement('div')
  messageContainer.className = 'message'
  messageContainer.style.top = `${queue.length * 50}px`
  document.body.appendChild(messageContainer)
  // 容器如何关联
  // 容器注册成根组件
  const root = ReactDom.createRoot(messageContainer)
  root.render(<Message />) //渲染组件
  queue.push({
    messageContainer,
    root
  })
  //2秒后移除
  setTimeout(() => {
    const item = queue.find(item => item.messageContainer === messageContainer)!
    item.root.unmount() //卸载
    document.body.removeChild(item.messageContainer)
    queue.splice(queue.indexOf(item), 1)
  }, 2000)
}

//声明扩充
declare global {
  interface Window {
    onShow: () => void
  }
}


export default Message