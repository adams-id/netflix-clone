import jwt from "jsonwebtoken";
import { ENV_VARS } from "../config/envVars.js";

export const generateTokenAndSetCookie = (userId, res) => {
  const token = jwt.sign({ userId }, ENV_VARS.JWT_SECRET, {
    expiresIn: "15d",
  });

  res.cookie("jwt-netflix", token, {
    maxAge: 15 * 24 * 60 * 60 * 1000, // 15 days
    httpOnly: true, // Prevents XSS attacks, make it not accesible by client-side JavaScript i.e browser
    sameSite: "strict", // Helps prevent CSRF attacks
    secure: ENV_VARS.NODE_ENV !== "development", // Use secure cookies when not in development
  });

  return token;
};
