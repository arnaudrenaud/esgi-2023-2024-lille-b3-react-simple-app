export function Counter({ count, setCount }) {
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
