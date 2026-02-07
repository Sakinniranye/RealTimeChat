import express, { Request, Response } from "express";

const app = express();

app.use(express.json());

// Routes
app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to the Authentication App API");
});

export default app;