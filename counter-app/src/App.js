import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [number, setNumber] = useState(0);
  function addnum() {
    setNumber(number + 1);
  }
  function subnum() {
    if (number > 0) {
      setNumber(number - 1);
    }
  }
  return (
    <div className="App">
      <p id="title">This is a Counter app</p>
      <p id="number_display">{number}</p>
      <div className="controls">
        <button onClick={addnum} id="button">
          Add
        </button>
        <button onClick={subnum} id="button">
          Subtract
        </button>
      </div>
      <footer>&copy; Copyright 2022 RISHIKESH_GUPTHA</footer>
    </div>
  );
}
