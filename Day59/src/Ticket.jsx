import "./Ticket.css";
import TicketNum from "./TicketNum";
const Ticket = ({ ticket }) => {
  return (
    <>
      <h3>Ticket</h3>
      <div className="ticket">
        {ticket.map((num, index) => {
          return <TicketNum key={index} num={num} />;
        })}
      </div>
    </>
  );
};

export default Ticket;
