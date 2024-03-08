import "./App.css";
import { useState } from "react";
import { Counter } from "./Counter";
import { Names } from "./Names";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <nav className="App-nav">
            <NavLink to="/counter" className="App-link">
              Compteur
            </NavLink>
            <NavLink to="/names" className="App-link">
              Générateur de noms
            </NavLink>
          </nav>

          <Routes>
            <Route
              path="/counter"
              element={<Counter count={count} setCount={setCount} />}
            />
            <Route path="/names" element={<Names />} />
          </Routes>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
