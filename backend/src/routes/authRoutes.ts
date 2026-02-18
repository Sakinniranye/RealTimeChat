import { Router } from "express";
import { registerUser, loginUser } from "../controllers/authController";
const { body } = require('express-validator');

const router = Router();

router.post("/register", registerUser);
router.post("/login", loginUser);

export default router;
