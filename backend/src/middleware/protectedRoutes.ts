import { Request, Response, NextFunction } from "express";

import jwt from "jsonwebtoken";
import config from "../config/config";

// Extend Express Request interface to include userId
declare global {
  namespace Express {
    interface Request {
      userId?: number;
    }
  }
}

// Verify JWT token and protect routes
const protectedRoute = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;
  console.log(authHeader);

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ msg: "Unauthorized: No token provided." });
  }

  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, config.jwtSecret!) as { userId: number };
    req.userId = decoded.userId;
    // Call the next route handler
    next();
  } catch (error) {
    return res.status(401).json({ msg: "Unauthorized: Invalid token." });
  }
};

export default protectedRoute;
