import express from "express";
import { protectRouter } from "../middlewares/auth.middleware.js";
import {
  getMessage,
  getUsersForSidebar,
  sendMessage,
} from "../controllers/message.controller.js";

const router = express.Router();

router.get("/user", protectRouter, getUsersForSidebar);
router.get("/:id", protectRouter, getMessage);

router.post("/send/:id", protectRouter, sendMessage);

export default router;
