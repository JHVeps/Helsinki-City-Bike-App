import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config({ path: ".env" });
const app = express();

// Express configuration
app.set("port", process.env.PORT);

// Global middleware
app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());

// Set up routers

export default app;
