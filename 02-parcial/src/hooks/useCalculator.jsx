import { useState } from "react";

const useCalculator = () => {
  const [display, setDisplay] = useState("0");
  const [prevValue, setPrevValue] = useState(null);
  const [operator, setOperator] = useState(null);

  const handleNumberClick = (number) => {
    setDisplay((prevDisplay) => prevDisplay + number);
  };

  const handleOperatorClick = (op) => {
    setPrevValue(display);
    setDisplay("");
    setOperator(op);
  };

  const handleEqualClick = () => {
    if (operator && prevValue !== null) {
      const currentValue = parseFloat(display);
      const previousValue = parseFloat(prevValue);
      let result;

      switch (operator) {
        case "+":
          result = previousValue + currentValue;
          break;
        case "-":
          result = previousValue - currentValue;
          break;
        case "*":
          result = previousValue * currentValue;
          break;
        case "/":
          result = previousValue / currentValue;
          break;
        default:
          return;
      }

      setDisplay(result.toString());
      setPrevValue(null);
      setOperator(null);
    }
  };

  const handleClearClick = () => {
    setDisplay("");
    setPrevValue(null);
    setOperator(null);
  };

  return {
    display,
    handleNumberClick,
    handleOperatorClick,
    handleEqualClick,
    handleClearClick,
  };
};

export default useCalculator;
