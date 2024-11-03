import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../utils/actions"; 

const CounterComponent = () => {
  const count = useSelector((state) => state.counter.count); 
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(increment())}>Increment</button>
    </div>
  );
};

export default CounterComponent;
