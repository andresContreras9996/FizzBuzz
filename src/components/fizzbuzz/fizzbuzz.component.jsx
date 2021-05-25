import React from "react";
import "./fizzbuzz.styles.css";
import {Card} from '../card/card.component'
import { checkBackground,getWord} from "./fizzbuzz.utils";

export const FizzBuzz = ({ sequence }) => {
  return <div className='fizzbuzz-container'>
    {sequence.map(number=>{
      const background=checkBackground(number);
      const word=getWord(number);
      return <Card background={background} word={word} number={number}></Card>
    })}
  </div>;
};
