import express from "express";
import protectedRoute from "../middleware/protectedRoutes";
import { prisma } from "../config/prisma";

const router = express.Router();

router.get("/", protectedRoute, async (req, res) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: String(req.userId) },
    });
    res.json({
      msg: "This is a protected route. Your user ID is: " + req.userId,
      user: user?.email,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Server error" });
  }
});

export default router;
