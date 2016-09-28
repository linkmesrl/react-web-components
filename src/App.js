import reactPolymer from 'react-polymer';
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <h1>Simple note application layout</h1>

        <tabs-clab vertical labels='["Today at 16:30", "Yesterday at 14:42", "Yesterday at 8:15"]'>
          <div className="tab-content">
            <p>Get things <b>done</b></p>
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
