import express from "express";
import { getCurrentUserData } from "../controllers/user";
import verifyAuthStatus from "../middleware/verifyAuthStatus";

const router = express.Router();

router.get("/current-user", verifyAuthStatus, getCurrentUserData);

export default router;
