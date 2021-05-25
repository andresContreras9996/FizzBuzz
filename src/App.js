import React, { Component } from "react";

import {FizzBuzz} from './components/fizzbuzz/fizzbuzz.component';

export default class App extends Component {
  constructor(){
    super();
    this.state={
      numbers:[],
    };
  }

  componentDidMount(){
    const sequence=Array.from(Array(100),(element,index)=>index+1);
    this.setState({numbers:sequence});
  }

  render() {
    const {numbers}=this.state;
    return (
      <div>
        <FizzBuzz sequence={numbers}></FizzBuzz>
      </div>
    );
  }
}
