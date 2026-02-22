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
    return res.status(500).json({
      msg: "There was an error getting the user profile",
      success: false,
    });
  }
}

const searchUser = async (req: Request, res: Response) => {
  try {
    const { username } = req.query;

    if (!username || typeof username !== "string") {
      return res.status(400).json({ success: false, msg: "Username query is required" });
    }

    const user = await prisma.user.findMany({
      where: { username: { contains: username } },
      select: { id: true, username: true, avatarUrl: true, createdAt: true }
    });

    if (!user) {
      return res.status(404).json({ success: false, msg: "User not found" });
    }

    return res.status(200).json({ success: true, user });

  } catch (error) {
    console.error(error);
    return res.status(500).json({
      msg: "There was an error searching for the user",
      success: false,
    });
  }
};

const userController = { getProfile, searchUser }
export default userController;