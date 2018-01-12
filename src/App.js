import React, { Component } from 'react';
import logo from './logo.png';
import Form from './components/Form';
import Preview from './components/Preview';
import Code from './components/Code';
import './App.css';

class App extends Component {
  constructor() {
    super();

    // button state
    this.state = {
      address: "NhN5m1uE1QwySphDJVN4nc6WhiAB6TFjxt",
      text: "Tip with Nav",
      alt: false,
      actionText: "Show QR Code",
      size: "lg",
      position: "bottom",
      closeText: "Thanks! Got it",
      type: "qr"
    };
  }

  update(key, value) {
    this.setState({ [key]: value });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header mb-5">
          <img src={logo} className="App-logo mb-3" alt="logo" />
          <p className="callout">
            Buttons for Use
          </p>
        </header>
        <div className="container-fluid">
          <div className="row justify-content-center App__row">
            <div className="col-lg-8">
              <h2>Generate Nav Buttons</h2>
              <p className="callout callout--section mb-5">
                Choose your options, copy your code, and start sharing your <a target="__blank" href="https://brianium.github.io/nav-button/">Nav buttons</a>!
              </p>
            </div>
            <div className="w-100"></div>
            <div className="col-lg-4 order-md-3 order-sm-3 order-3 order-lg-2">
              <Form {...this.state} update={(key, value) => this.update(key, value)} />
            </div>
            <div className="col-lg-4 order-md-2 order-sm-2 order-2 order-lg-3 pb-5">
              <h3>Preview</h3>
              <div className="mb-5">
                <Preview {...this.state} />
              </div>
              <Code {...this.state} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
