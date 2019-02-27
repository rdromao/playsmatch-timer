import React, { Component } from 'react';
import Timer from './timer'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="appTitle">
          La Hora Cuádrala
        </div>
        <Timer />
      </div>
    );
  }
}

export default App;
