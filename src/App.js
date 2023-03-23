import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [className, setClassName] = useState("red")
  const [checkbox, setCheckbox] = useState(false)
  function handleClick() {
    setClassName(preValue => preValue === "red" ? "blue" : "red")
  }
  
  function handleChange(e) {
    setCheckbox(prevValue => !prevValue)
  }

  return (
    <div className="App">
      <button onClick={handleClick} disabled={checkbox} style={{ backgroundColor: `${className}` }}>
        {className === "red" ? "Change to blue" : "Change to red"}
      </button>
      <input id="check" onChange={handleChange} checked={checkbox} type="checkbox"></input>
      <label htmlFor='check'>Disable button</label>
    </div>
  );
}

export default App;
