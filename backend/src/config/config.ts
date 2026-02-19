import dotenv from "dotenv";

dotenv.config();

interface Config {
  port: number;
  nodeEnv: string;
  databaseUrl: string;
  jwtSecret: string | undefined;
}

console.log(process.env.PORT);

const config: Config = {
  port: Number(process.env.PORT) || 3000,
  nodeEnv: process.env.NODE_ENV || "development",
  databaseUrl:
    process.env.DATABASE_URL ||
    "postgres://user:password@localhost:5432/testdb",
  jwtSecret: process.env.JWT_SECRET,
};

export default config;
