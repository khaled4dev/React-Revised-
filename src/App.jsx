
import React from 'react'
import './index.css'
import Card from './components/Card'

const App = () => {
  return (

    <div className='parent'>
    <Card title="one" discription="this is card first" style={{ backgroundColor: "#FFCDD2" }}
    imgUrl="https://images.unsplash.com/photo-1770037367722-5444567fcb52?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8"  />
    <Card title="two" discription="this is card second" style={{ backgroundColor: "#b90013" }} 
    imgUrl="https://images.unsplash.com/photo-1771533680002-c063a96c95a4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D" />
    <Card title="three" discription="this is card third" style={{ backgroundColor: "#0f9649" }} 
    imgUrl="https://images.unsplash.com/photo-1769708526202-247e1fe5691f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzOHx8fGVufDB8fHx8fA%3D%3D"/>
    </div>
  )
}

export default App