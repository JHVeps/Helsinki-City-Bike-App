import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import journeyRouter from "./routers/journey.router";

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
app.use("/api/v1/journeys", journeyRouter);

export default app;
