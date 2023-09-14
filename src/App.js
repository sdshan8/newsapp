import './App.css';
import NavBar from './components/Navbar';
import React, { Component } from 'react'
import News from './components/News';

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <News pageSize={5} country="in" category="general"/>
      </div>
    )
  }
}
