import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="App-counter">
      <button
        onClick={function () {
          setCount(count - 1);
        }}
      >
        -
      </button>
      {count}
      <button
        onClick={function () {
          setCount(count + 1);
        }}
      >
        +
      </button>
    </div>
  );
}
