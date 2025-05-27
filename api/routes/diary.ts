import express from "express";
import { createDiary } from "../controllers/diary";

const router = express.Router();

router.post("/new", createDiary);

export default router;