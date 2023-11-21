import React from "react";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Button from "./components/Button";
import Counter from "./components/Counter";
import "./App.css";

class App extends React.Component {
  // incluir props como arg en el constructor si el componente tiene que recibir props
  constructor() {
    super();
    this.state = {
      numClics: 0,
    };
    this.handleClick = this.handleClick.bind(this);
    this.resetCounter = this.resetCounter.bind(this);
  }

  handleClick() {
    this.setState(({ numClics }) => ({ numClics: numClics + 1 }));
  }

  resetCounter() {
    this.setState({ numClics: 0 });
  }

  render() {
    return (
      <div className="App">
        <div className="logo-contenedor">
          <img className="logo" src={reactLogo} alt="Logo de la app" />
        </div>

        <div className="principal-container">
          <Counter clickNumber={this.state.numClics}></Counter>
          <Button
            text="Click"
            isClickButton={true}
            handleClick={this.handleClick}
          ></Button>
          <Button
            text="Reset"
            isClickButton={false}
            handleClick={this.resetCounter}
          ></Button>
        </div>
      </div>
    );
  }
}

export default App;
