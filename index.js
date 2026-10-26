const express = require('express');
const mysql = require('mysql2');

const app = express();
const port = process.env.PORT || 3000;

const db = mysql.createConnection({
  host: process.env.DB_HOST || 'database',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'password123',
  database: process.env.DB_NAME || 'simple_app'
});

app.get('/', (req, res) => {
  res.send('<h1>Aplikasi Node.js & Docker Berhasil Berjalan di Azure VM! 🎉</h1>');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});