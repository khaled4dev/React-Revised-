import React from 'react'

function CardProperties({ name, age, address, status }) {
  return (
    <div className='card-main'>
        <h1>Name:{name}</h1>
        <p>Age:{age}</p>
        <p>Address:{address}</p>
        <p>Status:{status}</p>
    </div>
  )
}

export default CardProperties