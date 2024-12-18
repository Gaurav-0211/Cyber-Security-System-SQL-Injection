const db = require('./db');

async function testConnection() {
    try {
        const [rows] = await db.query('SELECT 1');
        console.log('Database connected successfully!', rows);
    } catch (error) {
        console.error('Database connection failed:', error.message);
    }
}

testConnection();
