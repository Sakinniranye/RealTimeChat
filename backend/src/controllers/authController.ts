import { Request, Response } from "express";
import { prisma } from "../config/prisma";
import { validationResult } from "express-validator";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import config from "../config/config";

/**
 * Register a new user
 *
 * @route POST /api/auth/register
 * @access Public
 */
const registerUser = async (req: Request, res: Response) => {
  // Validte the incoming request body with express-validator
  const errors = validationResult(req);

  // Respond with a 400 Bad Request if errors
  if (errors.isEmpty() === false) {
    return res.status(400).json({
      success: false,
      message: "Validation failed.",
    });
  }

  try {
    const { email, password, username } = req.body;
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser)
      return res
        .status(409)
        .json({ success: false, message: "Email is already in use" });

    // Hash user password before storing in db
    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await prisma.user.create({
      data: { email, username, passwordHash: hashedPassword },
    });

    return res.status(201).json({
      success: true,
      message: "User created successfully.",
    });
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: "There was an error signing up",
    });
  }
};

/**
 * Login an existing user and return a JWT token for authentication
 *
 * @route POST /api/auth/login
 * @access Public
 */
const loginUser = async (req: Request, res: Response) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      message: "Validation failed.",
    });
  }
  // Find the user attemping to login with their input email
  try {
    const { email, password } = req.body;
    const foundUser = await prisma.user.findUnique({ where: { email } });
    if (!foundUser) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password.",
      });
    }

    // Decrypt the stored password hash and compare it to the input password
    const passwordMatch = await bcrypt.compare(
      password,
      foundUser.passwordHash,
    );
    if (!passwordMatch) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid email or password." });
    }

    // Generate JWT token for the authenticated user to access protected routes
    const token = jwt.sign(
      {
        userId: foundUser.id,
      },
      config.jwtSecret!,
      { expiresIn: "1h" },
    );

    res.json({
      success: true,
      token,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "There was an error logging in.",
    });
  }
};

const authController = { registerUser, loginUser };
export default authController;
