import React, { Component } from "react";

import {FizzBuzz} from './components/fizzbuzz/fizzbuzz.component';

export default class App extends Component {
  constructor(){
    super();
    this.state={
      count:1,
    };
  }

  componentDidMount(){
    setInterval(this.incrementCounter,1000)
  }

  incrementCounter=()=>{
    this.setState((prevState,prevProps)=>{
      if(prevState.count===100){
        return({count:1})
      }
      return({count:prevState.count+1})
    })
  }

  render() {
    return (
      <div>
        <FizzBuzz number={this.state.count}/>
      </div>
    );
  }
}
