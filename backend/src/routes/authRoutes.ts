import express from "express";
import { registerUser, loginUser } from "../controller/authController";

const router = express().router;

router.post("/register", registerUser);
router.post("/login", loginUser);

export default router;
