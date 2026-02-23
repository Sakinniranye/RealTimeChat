import express from "express";
import protectedRoute from "../middleware/protectedRoutes";
import userController from "../controllers/userController";

const router = express.Router();

// GET /api/users/me
router.get("/me", protectedRoute, userController.getProfile);

// GET /api/users/search?username=
router.get("/search", protectedRoute, userController.searchUser);

// GET /api/users/:id
router.get("/:id", userController.getUserById);

// PATCH /users/me — Update profile (name, avatar URL)
export default router;
