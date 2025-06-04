import React, { useState } from "react";
import { getTicket, sum } from "./helper";
import Ticket from "./Ticket";
const Lottery = ({ n }) => {
  let [ticket, setTicket] = useState(getTicket(n));
  let isWinning = sum(ticket) == 15;
  const handleBuyTicket = () => {
    setTicket(getTicket(n));
  };
  return (
    <div>
      <h1>Lottery Game</h1>
      <Ticket ticket={ticket} />
      <br />
      <button onClick={handleBuyTicket}>Buy Ticket</button>
      <h3>{isWinning && "Congo! You won"}</h3>
    </div>
  );
};

export default Lottery;
