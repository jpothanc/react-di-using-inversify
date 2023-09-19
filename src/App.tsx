import { dicontainer } from "./services/Container";
import { ICalculator } from "./services/Calculator";
import { useState } from "react";

const App = () => {
  const calculator = dicontainer.get<ICalculator>("Calculator");

  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [sum, setSum] = useState(0);

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
            id="num1"
            placeholder="number1"
            onChange={(e) => setNum1(parseInt(e.target.value))}
            value={num1}
          ></input>
          <input
            type="number"
            placeholder="number2"
            id="num2"
            onChange={(e) => setNum2(parseInt(e.target.value))}
            value={num2}
          ></input>
          <button
            className="btn"
            onClick={() => setSum(calculator.add(num1, num2))}
          >
            Add
          </button>
          <input
            type="number"
            id="sum"
            placeholder="sum"
            onChange={(e) => setSum(parseInt(e.target.value))}
            value={sum}
          ></input>
        </header>
      </div>
    </>
  );
};

export default App;
