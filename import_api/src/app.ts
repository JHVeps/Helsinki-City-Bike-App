import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import { router as importJourney } from "./routes/journey.import";

dotenv.config();

const app = express();

app.set("port", process.env.PORT);

app.use(
  cors({
    origin: "*",
  })
);

app.use("/api/v1/import/journeys", importJourney);

export default app;
