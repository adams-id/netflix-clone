import mongoose from "mongoose";
import { ENV_VARS } from "./envVars.js";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(ENV_VARS.MONGO_URI);
    console.log("MONGO DB connected: " + conn.connection.host);
  } catch (err) {
    console.error("Error connecting to MONGO DB: " + err.message);
    process.exit(1); // 1 means there was an error, 0 means success
  }
};
