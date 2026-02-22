import express from "express";
import protectedRoute from "../middleware/protectedRoutes";
import userController from "../controllers/userController";

const router = express.Router();

router.get("/me", protectedRoute, userController.getProfile);
router.get("/search", protectedRoute, userController.searchUser)

export default router;
