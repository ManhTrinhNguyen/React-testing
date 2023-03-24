import logo from './logo.svg';
import './App.css';
import { useState } from 'react'; 

export function replaceCamelWithSpaces(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, ' $1')
}

console.log(replaceCamelWithSpaces("MediumVioletRed"))
function App() {
  const [className, setClassName] = useState("MediumVioletRed")
  const [checkbox, setCheckbox] = useState(false)
  function handleClick() { 
     setClassName(prevValue => prevValue === "MediumVioletRed" ? "MidnightBlue"  : "MediumVioletRed" )
  }
  
  function handleChange(e) {
    setCheckbox(prevValue => !prevValue)
  }

  return (
    <div className="App">
      <button onClick={handleClick} disabled={checkbox} style={checkbox ? { backgroundColor: "gray" } : { backgroundColor: `${className}`} }>
        {className === "MediumVioletRed" ? "Change to MidnightBlue" : "Change to MediumVioletRed"}
      </button>
      <input id="check" onChange={handleChange} checked={checkbox} type="checkbox"></input>
      <label htmlFor='check'>Disable button</label>
    </div>
  );
}

export default App;
