import { json, urlencoded } from 'body-parser';
import cors from 'cors';
import express from 'express';
import { query as _query } from './db';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(urlencoded({ extended: false }));
app.use(json());

app.post('/vulnerable-login', async (req, res) => {
    const { username, password } = req.body;

    const query = `SELECT * FROM users WHERE username = '${username}' AND password = '${password}'`;

    try {
        const [rows] = await _query(query);
        if (rows.length > 0) {
            res.json({ success: true, redirect: 'insecure.html', message: 'Access Granted! (Vulnerable)' });
        } else {
            res.json({ success: false, message: 'Invalid credentials!' });
        }
    } catch (error) {
        console.error('Error executing query:', error);
        res.status(500).json({ success: false, message: 'An error occurred!' });
    }
});

app.post('/secure-login', async (req, res) => {
    const { username, password } = req.body;

    const query = 'SELECT * FROM users WHERE username = ? AND password = ?';

    try {
        const [rows] = await _query(query, [username, password]);
        if (rows.length > 0) {
            if (username === 'admin' && password === 'password123') {
                res.json({ success: true, redirect: 'success.html', message: 'Access Granted! (Secure)' });
            } else {
                res.json({ success: false, message: 'Invalid credentials!' });
            }
        } else {
            res.json({ success: false, message: 'Invalid credentials!' });
        }
    } catch (error) {
        console.error('Error executing query:', error);
        res.status(500).json({ success: false, message: 'An error occurred!' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
