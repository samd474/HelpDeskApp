// Add a new ticket
app.post('/api/tickets', (req, res) => {
    const { title, description, queue } = req.body;
    const sql = 'INSERT INTO tickets (title, description, queue, status) VALUES (?, ?, ?, ?)';
    db.query(sql, [title, description, queue, 'open'], (err, result) => {
      if (err) throw err;
      res.json({ id: result.insertId });
    });
  });
  
  // Update a ticket
  app.put('/api/tickets/:id', (req, res) => {
    const { id } = req.params;
    const { status } = req.body;
    const sql = 'UPDATE tickets SET status = ? WHERE id = ?';
    db.query(sql, [status, id], (err, result) => {
      if (err) throw err;
      res.json({ success: true });
    });
  });
  