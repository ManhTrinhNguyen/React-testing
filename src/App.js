import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [className, setClassName] = useState("red")
  function handleClick() {
    setClassName(preValue => preValue === "red" ? "blue" : "red")
  }
  console.log(className)
  return (
    <div className="App">
      <button onClick={handleClick} style={{ backgroundColor: `${className}` }}>
        {className === "red" ? "Change to blue" : "Change to red"}
      </button>
    </div>
  );
}

export default App;
