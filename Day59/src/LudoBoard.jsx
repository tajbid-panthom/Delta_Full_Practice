import React, { useState } from "react";

const LudoBoard = () => {
  let [moves, setMoves] = useState({ blue: 0, yellow: 0, green: 0, red: 0 });
  let [arr, setArr] = useState([]);
  const handleMoveBlue = () => {
    setMoves((prevMoves) => {
      return { ...prevMoves, blue: prevMoves.blue + 1 };
    });
    setArr((prevArr) => {
      return [...prevArr, "blue"];
    });
  };
  const handleMoveYellow = () => {
    setMoves((prevMoves) => {
      return { ...prevMoves, yellow: prevMoves.yellow + 1 };
    });
  };
  const handleMoveGreen = () => {
    setMoves((prevMoves) => {
      return { ...prevMoves, green: prevMoves.green + 1 };
    });
  };
  const handleMoveRed = () => {
    setMoves((prevMoves) => {
      return { ...prevMoves, red: prevMoves.red + 1 };
    });
  };
  return (
    <div>
      <h1>Game Begins!</h1>
      <h3>{arr.join(" ")}</h3>
      <div className="board">
        <p>Blue moves = {moves.blue} </p>
        <button style={{ backgroundColor: "blue" }} onClick={handleMoveBlue}>
          +1
        </button>
        <p>Yellow moves = {moves.yellow} </p>
        <button
          style={{ backgroundColor: "#bfbf00" }}
          onClick={handleMoveYellow}
        >
          +1
        </button>
        <p>Green moves = {moves.green} </p>
        <button style={{ backgroundColor: "green" }} onClick={handleMoveGreen}>
          +1
        </button>
        <p>Red moves = {moves.red} </p>
        <button style={{ backgroundColor: "red" }} onClick={handleMoveRed}>
          +1
        </button>
      </div>
    </div>
  );
};

export default LudoBoard;
