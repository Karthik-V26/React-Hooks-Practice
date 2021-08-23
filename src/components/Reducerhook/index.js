import React, { useReducer } from "react";
import "../index.css";
const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function Reducerhook() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>
        Counter implemented using useReducer Hook with state,action,dispatch
      </h1>
      {count}
      <button onClick={() => dispatch("increment")}>Incremenrt</button>
      <button onClick={() => dispatch("decrement")}>Decerement</button>
      <button onClick={() => dispatch("reset")}>Reset</button>
    </div>
  );
}

export default Reducerhook;
