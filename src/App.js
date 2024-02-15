import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
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
      </header>
    </div>
  );
}

export default App;
