import React from 'react';
import './fizzbuzz.styles.css';
import {checkNumber,getFizzBuzz} from './fizzbuzz.utils';

export const FizzBuzz = ({number}) => {
  const classnames=['fizzbuzz-container',checkNumber(number)].join(' ');
  return (
    <div className={classnames} >
      <h1>{getFizzBuzz(number)}</h1>
      <p>{number}</p>
    </div>
  )
}
