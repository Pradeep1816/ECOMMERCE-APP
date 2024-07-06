import express from "express";
import { registerController } from "../controller/authContoller.js";
import { loginController } from "../controller/authContoller.js";

const router = express.Router();

// Registration Router

router.post("/register", registerController);

// Login
router.post("/login", loginController);

export default router;
