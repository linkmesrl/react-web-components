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

        <tabs-clab vertical labels='["Today at 16:30", "Yesterday at 14:42", "Yesterday at 8:15"]'>
          <div className="tab-content">
            <p>
              Testing a Polymer component
            </p>
            <p>
              <button-clab onClick={this.changeValue}>Click me</button-clab>
            </p>
            <p>
              <group-clab value={this.state.value}>
                <button-clab>One</button-clab>
                <button-clab>Two</button-clab>
                <button-clab>Three</button-clab>
              </group-clab>
            </p>

          </div>
        	<div className="tab-content">
        	  <ul className="default">
        	    <li>Buy milk</li>
        	    <li>Clean desk</li>
        	    <li>Call home</li>
        	  </ul>
        	</div>
        	<div className="tab-content">
        	  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique fuga voluptate ea, temporibus dolores quasi consequuntur libero.</p>
        	</div>
        </tabs-clab>

        <button-clab block icon="icon-plus">New note</button-clab>



      </div>
    );
  }
}

export default App;
