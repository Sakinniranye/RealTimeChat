const Pool = require("pg").Pool;

import config from "../config/config";

export const pool = new Pool({
  user: config.databaseUser,
  host: config.databaseHost,
  database: config.databaseName,
  password: config.databaseUserPassword,
  port: config.databasePort,
});
