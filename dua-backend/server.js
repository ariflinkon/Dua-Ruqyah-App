// /backend/server.js
const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 5000;

app.use(cors());

// Connect to SQLite DB
const dbPath = path.join(__dirname, 'dua_main.sqlite');
const db = new sqlite3.Database(dbPath, sqlite3.OPEN_READONLY, (err) => {
  if (err) {
    console.error('❌ Error connecting to database:', err.message);
  } else {
    console.log('✅ Connected to dua_main.sqlite');
  }
});

// API route to fetch all content
app.get('/api/content', (req, res) => {
  const query = 'SELECT * FROM dua'; // Change if your table name differs
  db.all(query, [], (err, rows) => {
    if (err) {
      console.error('❌ Query failed:', err.message);
      res.status(500).json({ error: err.message });
    } else {
      res.json(rows);
    }
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Backend server running at http://localhost:${PORT}`);
});
