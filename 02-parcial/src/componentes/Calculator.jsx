import useCalculator from "../hooks/useCalculator";

const Calculator = () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const operators = ["+", "-", "*", "/"];

  const {
    display,
    handleNumberClick,
    handleOperatorClick,
    handleEqualClick,
    handleClearClick,
  } = useCalculator();

  return (
    <div className="calculator">
      <h1>Calculator</h1>
      <input type="text" value={display} readOnly />
      <div className="button-container">
        <div className="numbers">
          {numbers.map((number) => (
            <button
              key={number}
              onClick={() => handleNumberClick(number.toString())}
            >
              {number}
            </button>
          ))}
          <button onClick={() => handleNumberClick(".")}>.</button>
          <button className="equal" onClick={handleEqualClick}>
            =
          </button>
        </div>
        <div className="operators">
          <button className="clear" onClick={handleClearClick}>
            C
          </button>
          {operators.map((op) => (
            <button
              key={op}
              className="operator"
              onClick={() => handleOperatorClick(op)}
            >
              {op}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calculator;
