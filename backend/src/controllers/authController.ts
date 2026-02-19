import express, { Request, Response } from "express";
import { prisma } from "../config/prisma";
import { validationResult } from "express-validator";
import bcrypt from "bcryptjs";


// validationResult, checks to see if any validation fails
export const registerUser = async(req: Request, res: Response) => {
  const errors = validationResult(req)

  if (errors.isEmpty() === false) {
    return res.status(400).json({
      status: 'error',
      msg: 'Validation error',
      errors: errors.array()
    })
  }

  try {
    const { email, password } = req.body;
    const existingUser = await prisma.user.findUnique({where: { email }});
    if (existingUser) return res.status(409).json({ error: "Email is already in use" });
    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await prisma.user.create({
      data: { email, password: hashedPassword}
    })
    return res.status(201).json({
      status: 'success',
      msg: 'User created successfully.',
      user: {
        id: user.id,
        email: user.email
      }
    });
  }catch (error: any) {
    console.error(error);
    return res.status(500).json({
      status: 'error',
      msg: 'Internal server error.',
      errors: error.message
    })
  }
};

export const loginUser = (req: Request, res: Response) => {
  // find. the user with their email
  // get the password sent check
  res.send({
    message: "logging in user",
  });
};
