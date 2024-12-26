import React, { useState } from "react";

function CounterApp() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Counter App</h1>
        <div className="counter-display">{count}</div>
        <div className="button-container">
          <button className="increment" onClick={increment}>
            Increment
          </button>
          <button className="decrement" onClick={decrement}>
            Decrement
          </button>
        </div>
      </header>
    </div>
  );
}

export default CounterApp;
