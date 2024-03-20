import React from "react";

const ChessPieces = () => {
  // Define the initial chess piece positions
  const initialPositions = [
    { type: "rook", color: "white", position: "a1" },
    { type: "knight", color: "white", position: "b1" },
    { type: "bishop", color: "white", position: "c1" },
    { type: "queen", color: "white", position: "d1" },
    { type: "king", color: "white", position: "e1" },
    { type: "bishop", color: "white", position: "f1" },
    { type: "knight", color: "white", position: "g1" },
    { type: "rook", color: "white", position: "h1" },
    // Define white pawns
    { type: "pawn", color: "white", position: "a2" },
    { type: "pawn", color: "white", position: "b2" },
    { type: "pawn", color: "white", position: "c2" },
    { type: "pawn", color: "white", position: "d2" },
    { type: "pawn", color: "white", position: "e2" },
    { type: "pawn", color: "white", position: "f2" },
    { type: "pawn", color: "white", position: "g2" },
    { type: "pawn", color: "white", position: "h2" },
    // Define black pieces
    { type: "rook", color: "black", position: "a8" },
    { type: "knight", color: "black", position: "b8" },
    { type: "bishop", color: "black", position: "c8" },
    { type: "queen", color: "black", position: "d8" },
    { type: "king", color: "black", position: "e8" },
    { type: "bishop", color: "black", position: "f8" },
    { type: "knight", color: "black", position: "g8" },
    { type: "rook", color: "black", position: "h8" },
    // Define black pawns
    { type: "pawn", color: "black", position: "a7" },
    { type: "pawn", color: "black", position: "b7" },
    { type: "pawn", color: "black", position: "c7" },
    { type: "pawn", color: "black", position: "d7" },
    { type: "pawn", color: "black", position: "e7" },
    { type: "pawn", color: "black", position: "f7" },
    { type: "pawn", color: "black", position: "g7" },
    { type: "pawn", color: "black", position: "h7" },
  ];

  // Function to render the chess pieces
  const renderPieces = () => {
    return initialPositions.map((piece, index) => (
      <div
        key={index}
        className={`chess-piece ${piece.type}-${piece.color}`}
        style={{ position: "absolute", top: 0, left: 0 }}
      >
        {/* You can use SVG or any other method to render the piece */}
        {/* Example: <img src={`path_to_${piece.type}_${piece.color}_image`} alt={`${piece.color} ${piece.type}`} /> */}
      </div>
    ));
  };

  return (
    <div className="chess-pieces">
      {/* Render the chess pieces */}
      {renderPieces()}
    </div>
  );
};

export default ChessPieces;
