import React from 'react'

const Card = ({title, discription , style, imgUrl}) => {
  return (
    <div className='card' style={style}>
        <img src={imgUrl} alt="" />
        <h1>
            Hi I am a card component {title}
        </h1>
        <p>
            {discription}
        </p>
    </div>
  )
}

export default Card