import { dicontainer } from "./services/Container";
import { ICalculator } from "./services/Calculator";
import React, { useState } from "react";

const App = () => {
  //Instantiating calculator object from the dependency injection container.
  const calculator = dicontainer.get<ICalculator>("Calculator");
  const [sum, setSum] = useState(0);
  const [input, setInput] = useState({
    input1: 0,
    input2: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput({
      ...input,
      [e.target.name]: parseInt(e.target.value),
    });
  };

  return (
    <>
      <div className="container">
        <header className="header">
          [React Depenedency Injection Demo using Inversify]
        </header>
        <header className="header__1">
          Calculator
          <input
            type="number"
            name="input1"
            onChange={handleChange}
            value={input.input1}
          ></input>
          <input
            type="number"
            name="input2"
            onChange={handleChange}
            value={input.input2}
          ></input>
          <button
            className="btn"
            //calling calculator add
            onClick={() => setSum(calculator.add(input.input1, input.input2))}
          >
            Add
          </button>
          <input type="number" name="sum" value={sum}></input>
        </header>
      </div>
    </>
  );
};

export default App;
