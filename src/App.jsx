
import React from 'react'
import './index.css'
import Card from './components/Card'
import CardProperties from './components/CardProperties';

const App = () => {

  const cards = [
  {
    name: "Amit Sharma",
    age: 28,
    address: "Mumbai, India",
    status: "available"
  },
  {
    name: "Rahul Verma",
    age: 32,
    address: "Delhi, India",
    status: "not available"
  },
  {
    name: "Priya Singh",
    age: 25,
    address: "Bangalore, India",
    status: "available"
  },
  {
    name: "Neha Gupta",
    age: 30,
    address: "Pune, India",
    status: "not available"
  },
  {
    name: "Arjun Mehta",
    age: 27,
    address: "Ahmedabad, India",
    status: "available"
  },
  {
    name: "Sneha Reddy",
    age: 29,
    address: "Hyderabad, India",
    status: "available"
  },
  {
    name: "Vikram Patel",
    age: 35,
    address: "Surat, India",
    status: "not available"
  },
  {
    name: "Anjali Nair",
    age: 26,
    address: "Kochi, India",
    status: "available"
  },
  {
    name: "Rohan Das",
    age: 31,
    address: "Kolkata, India",
    status: "not available"
  },
  {
    name: "Karan Malhotra",
    age: 33,
    address: "Chandigarh, India",
    status: "available"
  }
];
  return (

    <div className='parent'>
    {/* <Card title="one" discription="this is card first" style={{ backgroundColor: "#FFCDD2" }}
    imgUrl="https://images.unsplash.com/photo-1770037367722-5444567fcb52?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8"  />
    <Card title="two" discription="this is card second" style={{ backgroundColor: "#b90013" }} 
    imgUrl="https://images.unsplash.com/photo-1771533680002-c063a96c95a4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D" />
    <Card title="three" discription="this is card third" style={{ backgroundColor: "#0f9649" }} 
    imgUrl="https://images.unsplash.com/photo-1769708526202-247e1fe5691f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzOHx8fGVufDB8fHx8fA%3D%3D"/> */}
   
   {cards.map(function(k){
      return <CardProperties name={k.name} age={k.age} address={k.address} status={k.status} />
   })}

    </div>
  )
}

export default App