import { Request, Response } from "express";
import { prisma } from "../config/prisma";


const getProfile = async(req: Request, res: Response) => {
  try {
    if (!req.userId) {
      return res.status(401).json({ msg: "Unauthorized" });
    }

    const user = await prisma.user.findUnique({
      where: { id: req.userId},
      select: { id: true, email: true, username: true, avatarUrl: true, createdAt: true }
    })

    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }
    console.log(`I can get the profile for`)
    return res.status(200).json({ success: true, user });

  } catch (error: any) {
    console.error(error);
    return res.status(500).json({
      status: "error",
      msg: "Internal server error.",
      errors: error.message,
    });
  }
}

const testProtectedRoute = async (req: Request, res: Response) => {
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
};

const userController = {  getProfile, testProtectedRoute }
export default userController;