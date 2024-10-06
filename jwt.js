// Validate Microsoft SSO token in server.js
const jwt = require('jsonwebtoken');

app.post('/api/validate-token', (req, res) => {
  const token = req.body.token;
  jwt.verify(token, process.env.MICROSOFT_PUBLIC_KEY, (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: 'Invalid token' });
    }
    res.json({ valid: true, user: decoded });
  });
});
