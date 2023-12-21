type Action = { type: "INCREMENT" } | { type: "DECREMENT" } | { type: "RESET" };
type State = { count: number };
type Reducer = (state: State, action: Action) => State;

export const counterReducer: Reducer = (state, action) => {
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
