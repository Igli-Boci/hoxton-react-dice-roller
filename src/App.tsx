import { useState } from "react";
import "./App.css";

function App() {
  const [dice, setDice] = useState(0);

  function diceRoller() {
    setDice(Math.floor(Math.random() * 6) + 1);
  }

  return (
    <div className="App">
      <h1>Dice Roller</h1>
      <button
        className="button"
        onClick={() => {
          diceRoller();
        }}
      >
        Roll the Dice
      </button>
      <h2>{dice}</h2>
    </div>
  );
}

export default App;
