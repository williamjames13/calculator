import React, { useState } from 'react';
import './App.css';

function App() {
  const [display, setDisplay] = useState('');

  // Function to append numbers and operators to the display
  const appendToDisplay = (value) => {
    setDisplay(display + value);
  };

  // Function to calculate the expression in the display
  const calculate = () => {
    try {
      // Replace ÷ with / for division
      const result = eval(display.replace('÷', '/'));
      setDisplay(result.toString());
    } catch (error) {
      setDisplay('Error');
    }
  };

  // Function to clear the display
  const clearDisplay = () => {
    setDisplay('');
  };

  // Function to display the full name when the surname button is clicked
  const showFullName = () => {
    setDisplay('William Canlas');
  };

  return (
    <div className="calculator">
      <div className="calculator-title">Calculator of William Canlas - IT3A</div>
      <input type="text" value={display} disabled className="display" />
      
      <div className="buttons">
        <button onClick={clearDisplay}>C</button>
        <button onClick={() => appendToDisplay('7')}>7</button>
        <button onClick={() => appendToDisplay('8')}>8</button>
        <button onClick={() => appendToDisplay('9')}>9</button>
        <button onClick={() => appendToDisplay('+')}>+</button>

        <button onClick={() => appendToDisplay('4')}>4</button>
        <button onClick={() => appendToDisplay('5')}>5</button>
        <button onClick={() => appendToDisplay('6')}>6</button>
        <button onClick={() => appendToDisplay('-')}>-</button>

        <button onClick={() => appendToDisplay('1')}>1</button>
        <button onClick={() => appendToDisplay('2')}>2</button>
        <button onClick={() => appendToDisplay('3')}>3</button>
        <button onClick={() => appendToDisplay('*')}>*</button>

        <button onClick={() => appendToDisplay('0')}>0</button>
        <button onClick={() => appendToDisplay('÷')}>÷</button>
        <button onClick={calculate}>=</button>

        <button onClick={showFullName}>CANLAS</button>
      </div>
    </div>
  );
}

export default App;
