import { Button } from "fullstack-react-tdd-example-ui";
import React, { useReducer } from "react";

const initialState = { count: 0 };

type Action = { type: "INCREMENT" } | { type: "DECREMENT" } | { type: "RESET" };
type State = { count: number };
type Reducer = (state: State, action: Action) => State;

const counterReducer: Reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: Math.max(state.count - 1, 0) };
    case "RESET":
      return { count: 0 };
    default:
      return state;
  }
};

export const Counter = () => {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <div className="btn-group">
        <Button onClick={() => dispatch({ type: "INCREMENT" })}>
          Increment
        </Button>
        <Button onClick={() => dispatch({ type: "DECREMENT" })}>
          Decrement
        </Button>
        <Button onClick={() => dispatch({ type: "RESET" })}>Reset</Button>
      </div>
    </div>
  );
};
