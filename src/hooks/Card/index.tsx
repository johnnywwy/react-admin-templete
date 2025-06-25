import type React from 'react';
import './index.css'

interface Props {
 title?: string,
 subTitle?: string
 children?: React.ReactNode
 callback?: (params: string) => void
}

const Card: React.FC<Props> = (props: Props) => {
  props.callback && props.callback('我是子组件的参数')

  // 一般不会用这种方式
  window.addEventListener('on-card-click',(e)=>{
    console.log('触发了', e.params);
  })

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
        <button onClick={() => window.onShow()}>确认</button>
        <button>取消</button>
      </footer>
    </div>
  )
}

export default Card