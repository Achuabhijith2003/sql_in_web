// app.js
import express from 'express';
import bodyParser from 'body-parser';
import loginRoutes from './login.js';

const app = express();
const port = 5500;

// Middleware to parse JSON requests
app.use(bodyParser.json());

// Use the login routes
app.use('/', loginRoutes);

// Start the Express server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
