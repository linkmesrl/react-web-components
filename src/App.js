import reactPolymer from 'react-polymer';
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { value: 1 };
  }

  changeValue = () => {
    let num = Math.floor(Math.random() * 3);
    this.setState({ value: num });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          Testing a Polymer component
          <button-clab onClick={this.changeValue}>Click me</button-clab>
          <group-clab value={this.state.value} >
            <button-clab>One</button-clab>
            <button-clab>Two</button-clab>
            <button-clab>Three</button-clab>
          </group-clab>
        </p>
      </div>
    );
  }
}

export default App;
