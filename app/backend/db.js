const { Pool } = require("pg");

const pool = new Pool({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "notesuser",
  password: process.env.DB_PASSWORD || "notessecret",
  database: process.env.DB_NAME || "notesdb",
  port: 5432,
});

module.exports = pool;
