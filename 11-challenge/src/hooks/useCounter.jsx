import { useState } from "react";

export const useCounter = (value) => {
  const [count, setCount] = useState(value);

  const increment = () => setCount((prevCount) => prevCount + 1);
  const decrement = () => setCount((prevCount) => prevCount - 1);
  const reset = () => setCount(value);

  return { count, increment, decrement, reset };
};
