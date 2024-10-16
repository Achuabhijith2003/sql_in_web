import express from 'express';
import bodyParser from 'body-parser';
import loginRoutes from './DB/login.js'; // Ensure the correct import path

const app = express();
const port = 5500;

// Middleware to parse JSON requests
app.use(bodyParser.json());
app.use(express.static('public')); // Serve static files from the public folder

// Register the login route under the '/api' path
app.use('/api', loginRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
