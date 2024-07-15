import { useEffect, useState } from "react";
import "../index.css";
import useTictactoe from "./use-tic-tac-toe";
function TicTacToe() {
  const {
    board,
    calculateWinner,
    handleClick,
    getStatusMessage,
    resetGame,
    isNext,
  } = useTictactoe();

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyBUbqnef2bzlxBJ72ooRuKEa73ECfkMU6Y`
        );
        const data = await response.json()
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchdata();
  }, []);
  return (
    <>
      <div className="game">
        <div className="status">
          {getStatusMessage()}
          <button className="reset" onClick={resetGame}>
            reset
          </button>
        </div>
        <div className="board">
          {board.map((b, index) => {
            return (
              <>
                <button
                  className="cell"
                  key={index}
                  onClick={() => handleClick(index)}
                  disabled={b !== null}
                >
                  {b}
                </button>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default TicTacToe;
