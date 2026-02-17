import express, { Request, Response } from "express";
import userRoutes from "./routes/usersRoutes";

const app = express();

app.use(express.json());

// Routes
app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to the Authentication App API");
});

// User routes
app.use("/api/users", userRoutes);

export default app;
