// import { useState } from 'react'

// import './App.css'
import Card from './components/Card'
import Card2 from './components/Card2'

const fn = (params: string) => {
  console.log('我是父组件的方法', params);
}

function App() {
  return (
    <>
     <Card title='我喜欢男的' subTitle='假的' callback={fn}>
        <div>骗你的</div>
     </Card>
     <Card2 title='我喜欢女的' subTitle='真的'>
        <div>没骗你 哈哈哈</div>
     </Card2>
    </>
  )
}

export default App
