import express, { Request, Response } from "express";
import authRoutes from "./routes/authRoutes";
import protectedRoute from "./middleware/protectedRoutes";
import userRoutes from "./routes/userRoutes";

const app = express();

app.use(express.json());

// User routes
app.use("/api/auth", authRoutes);

// Routes
app.use("/api/profile", userRoutes);

export default app;
