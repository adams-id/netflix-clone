import express from "express";
import { protectRoute } from "./../middleware/protectRoute.js";
import {
  signup,
  login,
  logout,
  authCheck,
} from "../controller/auth.controller.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

router.get("/authCheck", protectRoute, authCheck);

export default router;
