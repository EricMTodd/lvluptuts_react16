import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  state = {
    input: "Hello"
  };

  updateInput = event => {
    this.setState({
      input: event.target.value
    });
  };

  submit = () => {
    console.log(this.text.value);
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Welcome text="Welcome to Using Props" />
          <h3>
            Edit <code>src/App.js</code> and save to reload.
            <br />
            <p>{this.state.input}</p>
            <input
              type="text"
              onChange={this.updateInput}
              value={this.state.input}
            />
            <input type="text" ref={input => (this.text = input)} />
            <button onClick={this.submit}>Show Value</button>
          </h3>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

class Welcome extends Component {
  render() {
    const { text } = this.props;
    return <h1 className="App-title">{text}</h1>;
  }
}

export default App;
