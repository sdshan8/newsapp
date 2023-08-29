import './App.css';


import React, { Component } from 'react'

export default class App extends Component {
  a = "a";
  render() {
    return (
      <div>
        this.{this.a}
      </div>
    )
  }
}
