import React from 'react'
import './card.styles.css'
export const Card = ({background, word, number}) => {
  return (
    <div className={`${background} card-container`}>
      <h1>{word}</h1>
      <p>{number}</p>
    </div>
  )
}
