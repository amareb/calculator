import React, { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(0);

  const handleButtonClick = (value) => {
    if (value === "=") {
      try {
        setResult(eval(input));
      } catch {
        setResult("Error");
      }
    } else if (value === "C") {
      setInput("");
      setResult(0);
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="calculator-wrapper">
      <h1>Calculator</h1>
      <div className="result-wrapper">
        <div>{input || "0"}</div>
        <div>= {result}</div>
      </div>
      <div className="button-wrapper">
        {["C", "/", "*", "-"].map((symbol) => (
          <button
            key={symbol}
            onClick={() => handleButtonClick(symbol)}
            className="first"
          >
            {symbol}
          </button>
        ))}
        {["7", "8", "9", "+"].map((symbol) => (
          <button key={symbol} onClick={() => handleButtonClick(symbol)}>
            {symbol}
          </button>
        ))}
        {["4", "5", "6", "1"].map((symbol) => (
          <button key={symbol} onClick={() => handleButtonClick(symbol)}>
            {symbol}
          </button>
        ))}
        {["2", "3", "0", "."].map((symbol) => (
          <button
            key={symbol}
            onClick={() => handleButtonClick(symbol)}
            className={symbol === "0" ? "zero" : ""}
          >
            {symbol}
          </button>
        ))}
        <button onClick={() => handleButtonClick("=")} className="yellow">
          =
        </button>
      </div>
    </div>
  );
};

export default Calculator;
