// login.js
import express from 'express';
import connection from './sql_init.js';

const router = express.Router();

// Login route
router.post('/login', (req, res) => {
  const { email, password } = req.body;

  // SQL query to check if the user exists
  const query = 'SELECT * FROM login WHERE email = ? AND password = ?';
  connection.query(query, [email, password], (error, results) => {
    if (error) {
      return res.status(500).json({ message: 'Database error', error });
    }
    if (results.length > 0) {
      // User found
      res.json({ message: 'Login successful', user: results[0] });
    } else {
      // User not found or wrong password
      res.status(401).json({ message: 'Invalid email or password' });
    }
  });
});

export default router;
