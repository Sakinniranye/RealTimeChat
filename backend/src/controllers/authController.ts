import express, { Request, Response } from "express";

export const registerUser = (req: Request, res: Response) => {
  res.send({
    message: `creating a new user`,
  });
};

export const loginUser = (req: Request, res: Response) => {
  // find. the user with their email
  // get the password sent check
  res.send({
    message: "logging in user",
  });
};
