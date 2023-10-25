import React, { useEffect, useState } from 'react';
import { getTickets } from './ZenDeskAPI';

function TicketList() {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    getTickets()
      .then((response) => {
        setTickets(response.data.tickets);
      })
      .catch((error) => {
        console.error('Error fetching tickets: ', error);
      });
  }, []);

  return (
    <div>
      <h1>Ticket List</h1>
      <ul>
        {tickets.map((ticket) => (
          <li key={ticket.id}>{ticket.subject}</li>
        ))}
      </ul>
    </div>
  );
}

export default TicketList;
