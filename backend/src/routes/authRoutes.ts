import { Router } from "express";
import { registerUser, loginUser } from "../controllers/authController";
const { body } = require('express-validator');

const router = Router();

const validateRegister = [
    body('email').isEmail().notEmpty().withMessage('Please enter your email address.'),
    body('password').isLength({ min: 8 }).withMessage('Password must be atleast 8 characters long.')
]

router.post("/register", validateRegister, registerUser);
router.post("/login", loginUser);

export default router;
