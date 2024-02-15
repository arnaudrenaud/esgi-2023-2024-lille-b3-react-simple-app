import "./App.css";
import { useState } from "react";
import { Names } from "./Names";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
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
        <Names />
      </header>
    </div>
  );
}

export default App;
