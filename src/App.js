import { useState } from "react";
import "./App.css";
import Square from "./Square";

function App() {
  const propVariable = "This is a prop";

  const [squares, setSqurares] = useState(["", "", "", "", "", "", "", "", ""]);
  const [player, setPlayer] = useState(true);

  const handleClick = () => {
    setSqurares(["", "", "", "", "", "", "", "", ""]);
    setPlayer(true);
  };

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2], // top row
      [3, 4, 5], // middle row
      [6, 7, 8], // bottom row
      [0, 3, 6], // left column
      [1, 4, 7], // middle column
      [2, 5, 8], // right column
      [0, 4, 8], // diagonal top left to bottom right
      [2, 4, 6], // diagonal top right to bottom left
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i]; // destructuring
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return `${squares[a]} won!`;
      }
    }
    return "Who will win?";
  };

  return (
    <div className="App">
      <span>{calculateWinner(squares)}</span>
      <div className="container">
        {squares.map((square, index) => {
          return (
            <Square
              squares={squares}
              setSquares={setSqurares}
              index={index}
              squareValue={square}
              player={player}
              setPlayer={setPlayer}
            />
          );
        })}
      </div>
      <button onClick={handleClick}>Reset</button>
    </div>
  );
}

export default App;
