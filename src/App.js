import reactPolymer from 'react-polymer';
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { value: 1, visible: true };
  }

  changeValue = () => {
    let num = Math.floor(Math.random() * 3);
    this.setState({ value: num });
  }
  closeAlert = () => {
    this.setState({ visible: false });
  };
  toggleAccordion = () => {
    this.setState({ toggle: !this.state.toggle });
  };
  handleChange = (e) => {
    console.log(e.target.htmlFor);
    this.setState({ checked: e.target.htmlFor });
  };
  render() {
    let classes;
    if (!!this.state.toggle) {
      classes = 'accordion-block active';
    } else {
      classes = 'accordion-block';
    }
    return (
      <div className="App">

        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <alert-clab notify visible no-animation type="primary"> content </alert-clab>
        <tabs-clab vertical labels='["Today at 16:30", "Yesterday at 14:42", "Yesterday at 8:15"]'>
          <div className="tab-content">
            <p>
              POLYMER
              <radio-clab labels='["radio 1", "radio 2"]' name="group1" onChange={(e) => console.log(e)}></radio-clab>
            </p>
            <p>
              REACT
              <input id="radio1" type="radio" name="radio_button1" checked={this.state.checked === 'radio1'} />
              <label htmlFor="radio1" onClick={this.handleChange}>radio</label>
              <input id="radio2" type="radio" name="radio_button2" checked={this.state.checked === 'radio2'} />
              <label htmlFor="radio2" onClick={this.handleChange}>radio</label>

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
        	</div>
        </tabs-clab>
        <accordion-clab title="Versione polimer">
          <p>First content</p>
        </accordion-clab>
        <accordion-clab title="non funziona">
          <p>Second content</p>
        </accordion-clab>
        <div className="accordion">
          <div className={classes}>
            <div className="accordion-title" onClick={this.toggleAccordion}>
              Questo è la versione html con l'evento ricreato in react
            </div>
            <div className="accordion-content">
              Accordion content
            </div>
          </div>
        </div>

        <dropdown-clab
          label="Simple Dropdown"
          options='[{"label":"Abruzzo", "value":"Abruzzo"},{"label":"Aosta", "value":"Aosta"},{"label":"Puglia", "value":"Puglia"}]'
          onChange={(e) => console.log(e)}
        >
        </dropdown-clab>


        <autocomplete-clab
          label="Regioni"
          options='[{"label":"Calabria", "value":"Calabria"},{"label":"Abruzzo", "value":"Abruzzo"},{"label":"Aosta", "value":"Aosta"}]'
        >
            Here goes the note
        </autocomplete-clab>

        <tags-clab label="Add tag" btn="Add"></tags-clab>
        <button-clab block icon="icon-plus">New note</button-clab>



      </div>
    );
  }
}

export default App;
