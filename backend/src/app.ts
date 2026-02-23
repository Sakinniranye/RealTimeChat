import express from "express";

// Routes imports
import authRoutes from "./routes/authRoutes";
import userRoutes from "./routes/userRoutes";

const app = express();

app.use(express.json());

// Public routes
app.use("/api/auth", authRoutes);

// Protected Routes
app.use("/api/users", userRoutes);

export default app;
