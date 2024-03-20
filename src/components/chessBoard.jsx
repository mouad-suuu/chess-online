import React from "react";

const ChessBoard = () => {
  // Function to render the chess board squares
  const renderSquares = () => {
    const squares = [];
    // Loop through rows and columns to create squares
    for (let row = 0; row < 8; row++) {
      for (let col = 0; col < 8; col++) {
        // Determine the color of the square based on row and column
        const color = (row + col) % 2 === 0 ? "light" : "dark";
        squares.push(
          <div
            key={`${row}-${col}`}
            className={`square ${color}`}
            // Add onClick handler if needed
          ></div>
        );
      }
    }
    return squares;
  };

  return (
    <div className="chess-board">
      {/* Render the chess board squares */}
      {renderSquares()}
    </div>
  );
};

export default ChessBoard;
