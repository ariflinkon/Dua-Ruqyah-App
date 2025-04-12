const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());

const db = new sqlite3.Database('./dua_main.sqlite');

// Fetch categories
app.get('/api/categories', (req, res) => {
  db.all('SELECT * FROM category', (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

// Fetch subcategories by category ID
app.get('/api/subcategories/:cat_id', (req, res) => {
  const { cat_id } = req.params;
  db.all('SELECT * FROM sub_category WHERE cat_id = ?', [cat_id], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

// Fetch duas by subcategory ID
app.get('/api/duas/:subcat_id', (req, res) => {
  const { subcat_id } = req.params;
  db.all('SELECT * FROM dua WHERE subcat_id = ?', [subcat_id], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
