import { Button } from "fullstack-react-tdd-example-ui";
import React, { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <div className="btn-group">
        <Button onClick={increment}>Increment</Button>
        <Button onClick={decrement}>Decrement</Button>
        <Button onClick={reset}>Reset</Button>
      </div>
    </div>
  );
};
