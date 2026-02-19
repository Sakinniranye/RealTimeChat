import { Request, Response } from "express";
import { prisma } from "../config/prisma";
import { validationResult } from "express-validator";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import config from "../config/config";

// validationResult, checks to see if any validation fails
const registerUser = async (req: Request, res: Response) => {
  const errors = validationResult(req);

  if (errors.isEmpty() === false) {
    return res.status(400).json({
      success: false,
      msg: "Validation error",
      errors: errors.array(),
    });
  }

  try {
    const { email, password } = req.body;
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser)
      return res
        .status(409)
        .json({ error: "Email is already in use", success: false });
    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await prisma.user.create({
      data: { email, password: hashedPassword },
    });

    const token = jwt.sign({ userId: user.id }, config.jwtSecret!, {
      expiresIn: "1h",
    });

    return res.status(201).json({
      success: true,
      msg: "User created successfully.",
      user: {
        id: user.id,
        email: user.email,
      },
      token: token,
    });
  } catch (error: any) {
    console.error(error);
    return res.status(500).json({
      status: "error",
      msg: "Internal server error.",
      errors: error.message,
    });
  }
};

const loginUser = async (req: Request, res: Response) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      errors: errors.array(),
    });
  }
  // find the user attemping to login with their input email
  try {
    const { email, password } = req.body;
    const foundUser = await prisma.user.findUnique({ where: { email } });
    if (!foundUser) {
      return res.status(401).json({
        msg: "Invalid email or password.",
        success: false,
      });
    }

    const passwordMatch = await bcrypt.compare(password, foundUser.password);
    if (!passwordMatch) {
      return res
        .status(401)
        .json({ msg: "Invalid email or password.", success: false });
    }

    const token = jwt.sign(
      {
        userId: foundUser.id,
      },
      config.jwtSecret!,
      { expiresIn: "1m" },
    );

    res.json({
      msg: "Login was successful.",
      success: true,
      token,
    });
  } catch (error: any) {
    res.status(500).json({
      msg: "There was an error logging in.",
      success: false,
    });
  }
};

const authController = { registerUser, loginUser };
export default authController;
