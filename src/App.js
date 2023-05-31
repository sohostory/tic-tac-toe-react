import { useState } from "react";
import "./App.css";
import Square from "./Square";

function App() {
  const propVariable = "This is a prop";

  const [squares, setSqurares] = useState(["", "", "", "", "", "", "", "", ""]);
  const [player, setPlayer] = useState(true);

  return (
    <div className="App">
      <Square
        squares={squares}
        setSquares={setSqurares}
        player={player}
        setPlayer={setPlayer}
      />
    </div>
  );
}

export default App;
