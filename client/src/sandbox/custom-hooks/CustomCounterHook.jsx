import React from "react";
import useCounter from "./useCounter";

const CustomCounterHook = () => {
  const [counter, increment, decrement, reset] = useCounter(5);
  return (
    <div>
      <p>counter: {counter}</p>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={reset}>reset</button>
    </div>
  );
};

export default CustomCounterHook;
