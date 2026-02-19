import { Request, Response, NextFunction } from "express";

import jwt from "jsonwebtoken";
import config from "../config/config";

declare global {
  namespace Express {
    interface Request {
      userId?: number;
    }
  }
}

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
    next();
  } catch (error) {
    return res.status(401).json({ msg: "Unauthorized: Invalid token." });
  }
};

export default protectedRoute;
