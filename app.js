// app.js
import express from 'express';
import bodyParser from 'body-parser';
import loginRoutes from './DB/login.js'; // Import login routes

const app = express();
const port = 5500;

// Middleware to parse JSON requests
app.use(bodyParser.json());

// Use the login routes
app.use('/api', loginRoutes); // Prefix the login routes with '/api'

// Start the Express server
app.listen(port, () => {
  console.log(`Server is running at http://127.0.0.1:5500/public/`);
});
