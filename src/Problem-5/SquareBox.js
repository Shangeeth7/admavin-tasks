import React, { useState } from "react";
import "./style.css";

function SquareBox() {
  const [squares, setSquares] = useState([{ x: 0, y: 0, size: 400 }]);

  function handleSquareClick(clickedSquare) {
    const { x, y, size } = clickedSquare;
    const newSquares = [
      ...squares.filter((square) => !(square.x === x && square.y === y)),
      { x, y, size: size / 2 },
      { x: x + size / 2, y, size: size / 2 },
      { x, y: y + size / 2, size: size / 2 },
      { x: x + size / 2, y: y + size / 2, size: size / 2 },
    ];
    setSquares(newSquares);
  }

  return (
    <div className="square-container">
      {squares.map((square) => (
        <div
          key={`${square.x}-${square.y}`}
          className="square"
          style={{
            left: square.x,
            top: square.y,
            width: square.size,
            height: square.size,
          }}
          onClick={() => handleSquareClick(square)}
        />
      ))}
    </div>
  );
}

export default SquareBox;
