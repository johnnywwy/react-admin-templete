import type React from 'react';
import './index.css'

interface Props {
 title?: string,
 subTitle?: string
 children?: React.ReactNode
 callback?: (params: string) => void
}

const Card2: React.FC<Props> = (props: Props) => {

  const event = new Event('on-card-click') //添加到事件中心
  const clickCard = () => {
    event.params = {name: '我是参数'}
    window.dispatchEvent(event)
  }
  return (
    <div className='card'>
      <header>
        <div className='title'>{props.title}</div>
        <div className='subTitle'>{props.subTitle}</div>
      </header>
      <main>
        {props.children}
      </main>
      <footer>
        <button onClick={clickCard}>确认</button>
        <button>取消</button>
      </footer>
    </div>
  )
}

//扩充event类型
declare global {
  interface Event {
    params: any
  }
}

export default Card2