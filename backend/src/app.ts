import express, { Request, Response } from "express";
import authRoutes from "./routes/authRoutes";

const app = express();

app.use(express.json());

// Routes
app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to the Authentication App API");
});

// User routes
app.use("/api/auth", authRoutes);

export default app;
