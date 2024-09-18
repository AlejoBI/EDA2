import { useCounter } from "../hooks/useCounter";

import PropTypes from "prop-types"; // npm i prop-types

const Counter = ({ value }) => {
  const { count, decrement, reset, increment } = useCounter(value);

  return (
    <div className="Count">
      <h2>{count}</h2>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

Counter.propTypes = {
  value: PropTypes.number.isRequired,
};

Counter.defaultProps = {
  value: 0,
};

export default Counter;
