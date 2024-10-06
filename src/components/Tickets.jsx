// src/components/Tickets.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Tickets = () => {
  const [tickets, setTickets] = useState([]);
  const [queue, setQueue] = useState('all');

  useEffect(() => {
    // Fetch tickets from API based on the selected queue
    axios.get(`/api/tickets?queue=${queue}`)
      .then(response => setTickets(response.data))
      .catch(error => console.error(error));
  }, [queue]);

  return (
    <div>
      <h2>Tickets</h2>
      <select onChange={(e) => setQueue(e.target.value)} value={queue}>
        <option value="all">All Queues</option>
        <option value="priority">Priority</option>
        <option value="department">Department</option>
      </select>

      <ul>
        {tickets.map(ticket => (
          <li key={ticket.id}>{ticket.title} - {ticket.status}</li>
        ))}
      </ul>
    </div>
  );
};

export default Tickets;
