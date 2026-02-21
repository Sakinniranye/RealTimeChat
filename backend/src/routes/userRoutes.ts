import express from "express";
import protectedRoute from "../middleware/protectedRoutes";
import userController from "../controllers/userController";

const router = express.Router();

router.get("/", protectedRoute, userController.testProtectedRoute);
router.get("/me", protectedRoute, userController.getProfile);

export default router;
