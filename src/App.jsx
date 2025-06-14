// App.js
import React, { useState, useCallback } from "react";

// Button component
const IncrementButton = React.memo(({ onIncrement }) => {
  console.log("IncrementButton re-rendered");
  return <button onClick={onIncrement}>Increment</button>;
});

function App() {
  const [count, setCount] = useState(0);
  const [otherState, setOtherState] = useState(false);

  // useCallback will return the same function unless `count` changes
  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>useCallback Example</h1>
      <p>Count: {count}</p>
      <IncrementButton onIncrement={increment} />

      <button onClick={() => setOtherState(!otherState)}>
        Toggle Other State
      </button>
      <p>Other State: {otherState.toString()}</p>
    </div>
  );
}

export default App;
