import pg from "pg";
const { Pool } = pg;

import config from "../config/config";

export const pool = new Pool({
  connectionString: config.databaseUrl,
  ssl: { rejectUnauthorized: false }
});

export async function checkDbConnection() {
  const res = await pool.query("select now()");
  return res.rows[0];
}