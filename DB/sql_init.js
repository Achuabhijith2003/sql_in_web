// sql_init.js
import mysql from 'mysql';

// MySQL connection setup
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'sqlinweb'
});

// Connect to the MySQL database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err.message);
  } else {
    console.log('Connected to MySQL database.');
  }
});

// Export the connection so that it can be used in other modules
export default connection;
