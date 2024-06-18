/**
 * server.js.
 *
 * @author Rosnin Mustaffa
 */

const express = require('express');
const mysql = require('mysql2');
const path = require('path');
const app = express();
const PORT = 3000;

// Use CORS middleware
app.use(cors());

app.use(express.json());
app.use(express.static(path.join(__dirname)));

// Database connection
const db = mysql.createConnection({
    host: 'db', // Use the service name defined in docker-compose.yml
    user: 'root',
    password: 'root',
    database: 'mydatabase'
});

db.connect(err => {
    if (err) {
        console.error('Error connecting to the database:', err);
        process.exit(1);
    } else {
        console.log('Connected to the database');
    }
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    console.log(`Received login request for username: ${username}`);

    const query = 'SELECT * FROM users WHERE username = ? AND password = ?';
    db.query(query, [username, password], (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            res.status(500).send({ success: false, message: 'Internal Server Error' });
            return;
        }

        if (results.length > 0) {
            console.log('User authenticated successfully');
            res.send({ success: true });
        } else {
            console.log('Invalid username or password');
            res.send({ success: false });
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
