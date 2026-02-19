import { Router } from "express";
import authController from "../controllers/authController";
const { body } = require("express-validator");

const router = Router();

const validateRegister = [
  body("email")
    .isEmail()
    .notEmpty()
    .withMessage("Please enter your email address."),
  body("password")
    .isLength({ min: 8 })
    .withMessage("Password must be atleast 8 characters long."),
];

router.post("/register", validateRegister, authController.registerUser);

const validateLogin = [
  body("email")
    .isEmail()
    .notEmpty()
    .withMessage("Please enter your email address."),
  body("password").notEmpty().withMessage("Password is required."),
];

router.post("/login", validateLogin, authController.loginUser);

export default router;
