import { useState } from "react";

const useTictactoe = () => {
  const initialBoard = Array(9).fill(null);
  const [board, setBoard] = useState(initialBoard);
  const [isNext, setIsNext] = useState(true);

  const winnerPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const calculateWinner = (currentBoard) => {
    for (let i = 0; i < winnerPattern.length; i++) {
      const [a, b, c] = winnerPattern[i];
      if (
        currentBoard[a] &&
        currentBoard[a] === currentBoard[b] &&
        currentBoard[a] === currentBoard[c]
      ) {
        return currentBoard[a];
      }
    }
    return null;
  };

  const handleClick = (index) => {
    const winner = calculateWinner(board);
    console.log(winner);
    if (winner || board[index]) return;

    const newBoard = [...board];
    newBoard[index] = isNext ? "x" : "0";
    setBoard(newBoard);
    setIsNext(!isNext);
  };

  const getStatusMessage = () => {
    const winner = calculateWinner(board);
    if (winner) return `player ${winner} won `;
    if (!board.includes(null)) return "its a draw";
    return `player ${isNext ? "x" : "0"} turn`;
  };

  const resetGame = () => {
    setBoard(initialBoard);
    setIsNext(true)
  };

  return {
    board,
    calculateWinner,
    handleClick,
    getStatusMessage,
    resetGame,
    isNext,
  };
};
export default useTictactoe;
