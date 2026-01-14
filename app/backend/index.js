const express = require("express");
const cors = require("cors");
const pool = require("./db");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/notes", async (req, res) => {
  const result = await pool.query(
    "SELECT * FROM notes ORDER BY created_at DESC"
  );
  res.json(result.rows);
});

app.post("/api/notes", async (req, res) => {
  const { content } = req.body;

  if (!content) {
    return res.status(400).json({ error: "Content is required" });
  }

  const result = await pool.query(
    "INSERT INTO notes (content) VALUES ($1) RETURNING *",
    [content]
  );

  res.status(201).json(result.rows[0]);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Backend running on 0.0.0.0:${PORT}`);
});


