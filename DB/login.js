import express from 'express';
import connection from './sql_init.js'; // Ensure this is the correct path

const router = express.Router();

router.post('/login', (req, res) => {
  const { email, password } = req.body; // Get email and password from request body

  // Ensure both email and password are provided
  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required.' });
  }

  // SQL query to check login credentials
  const query = 'SELECT * FROM login WHERE username = ? AND passsword = ?';
  connection.query(query, [email, password], (error, results) => {
    if (error) {
      console.error('Database query error:', error);
      return res.status(500).json({ message: 'Internal server error.' });
    }

    if (results.length > 0) {
      // Login successful
      res.json({ message: 'Login successful', user: results });
    } else {
      // Login failed
      res.status(401).json({ message: 'Invalid email or password' });
    }
  });
});

export default router;
