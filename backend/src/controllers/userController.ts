import { Request, Response } from "express";
import { prisma } from "../config/prisma";

/**
 * Get the profile of the currently authenticated user
 *
 * @route POST /api/users/me
 * @access Protected
 */

const getProfile = async (req: Request, res: Response) => {
  try {
    if (!req.userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const user = await prisma.user.findUnique({
      where: { id: String(req.userId) },
      select: {
        id: true,
        email: true,
        username: true,
        avatarUrl: true,
        createdAt: true,
      },
    });

    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }
    return res.status(200).json({ success: true, user });
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: "There was an error getting the user profile",
    });
  }
};

/**
 * Search for users by username (partial match)
 *
 * @route POST /api/users/search?username=
 * @access Protected
 */
const searchUser = async (req: Request, res: Response) => {
  try {
    const { username } = req.query;

    if (!username || typeof username !== "string") {
      return res
        .status(400)
        .json({ success: false, message: "Username query is required" });
    }

    const user = await prisma.user.findMany({
      where: { username: { contains: username } },
      select: { id: true, username: true, avatarUrl: true, createdAt: true },
    });

    // If no users are found, return a 404 with a message
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "No user was found" });
    }

    return res.status(200).json({ success: true, user });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "There was an error searching for the user",
    });
  }
};

/**
 * Get specific user profile by Id
 *
 * @route POST /api/users/:id
 * @access Protected
 */
const getUserById = async (req: Request, res: Response) => {
  const { id } = req.params;

  const foundUser = await prisma.user.findUnique({ where: { id: String(id) } });
  if (!foundUser) {
    return res.json({
      success: false,
      message: `User with the id ${id} not found.`,
    });
  }
  res.json({
    success: true,
    user: {
      username: foundUser.username,
      email: foundUser.email,
      avatarUrl: foundUser.avatarUrl,
      createdAt: foundUser.createdAt,
    },
  });
};

const userController = { getProfile, searchUser, getUserById };
export default userController;
