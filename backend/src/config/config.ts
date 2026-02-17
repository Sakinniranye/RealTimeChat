import dotenv from "dotenv";

dotenv.config();

interface Config {
  port: number;
  nodeEnv: string;
  databaseName: string;
  databaseUser: string;
  databaseUserPassword: string;
  databaseHost: string;
  databasePort: number;
}

console.log(process.env.PORT);

const config: Config = {
  port: Number(process.env.PORT) || 3000,
  nodeEnv: process.env.NODE_ENV || "development",

  databaseName: process.env.DATABASE_NAME || "testdb",
  databaseUser: process.env.DATABASE_USER || "",
  databaseUserPassword: process.env.DATABASE_USER_PASSWORD || "",
  databaseHost: process.env.DATABASE_HOST || "",
  databasePort: Number(process.env.DATABASE_PORT) || 5432,
};

export default config;
