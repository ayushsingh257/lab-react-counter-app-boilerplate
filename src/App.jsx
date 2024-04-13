import './App.css'

import React, { Component } from 'react'



export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    }
  }

  render() {
    return (
      <div id='container'>
        <h1 id='heading'>Counter App</h1>
        <h2 id='count'>{this.state.count}</h2>
        <div id='button-holder'>
          <button onClick={()=> this.setState({count: this.state.count + 1})}>Increment</button>
          <button onClick={()=> this.setState({count: this.state.count - 1})}>Decrement</button>
          <button onClick={()=> this.setState({count: 0})}>Reset</button>
        </div>
      </div>
    )
  }
}



