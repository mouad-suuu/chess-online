import React from "react";
import ChessBoard from "../components/chessBoard";
import ChessPieces from "../components/chessPieces";

const Page = () => {
  return (
    <div className="page-container">
      <h1>Online Chess suu</h1>
      <div className="game-container">
        {/* Render the chess board */}
        <ChessBoard />
        {/* Render the chess pieces */}
        <ChessPieces />
      </div>
    </div>
  );
};

export default Page;
