import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Button from "./components/Button";
import Counter from "./components/Counter";
import "./App.css";

function App() {
  const [numClics, setNumClics] = useState(0);

  const handleClick = () => {
    setNumClics(numClics + 1);
  };

  const resetCounter = () => {
    setNumClics(0);
  };

  return (
    <div className="App">
      <div className="logo-contenedor">
        <img className="logo" src={reactLogo} alt="Logo de la app" />
      </div>

      <div className="principal-container">
        <Counter clickNumber={numClics}></Counter>
        <Button
          text="Click"
          isClickButton={true}
          handleClick={handleClick}
        ></Button>
        <Button
          text="Reset"
          isClickButton={false}
          handleClick={resetCounter}
        ></Button>
      </div>
    </div>
  );
}

export default App;
