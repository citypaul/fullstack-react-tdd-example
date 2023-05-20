import { Button } from "fullstack-react-tdd-example-ui";
import React, { useState } from "react";

export const UseStateCounter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
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
    <div className="stat">
      <h2 className="stat-title">Count</h2>
      <p
        className="stat-value"
        role="status"
        aria-live="polite"
        aria-label="count"
      >
        {count}
      </p>
      <div
        className="stat-actions"
        role="toolbar"
        aria-label="counter controls"
      >
        <div className="btn-group">
          <Button onClick={increment}>Increment</Button>
          <Button onClick={decrement}>Decrement</Button>
          <Button onClick={reset}>Reset</Button>
        </div>
      </div>
    </div>
  );
};
