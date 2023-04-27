import express from "express";
import config from "./utils/config";
import mongoose from "mongoose";
import logger from "./utils/logger";
import cors from "cors";
import journeyRouter from "./routers/journey.router";
import stationRouter from "./routers/station.router";
import middleware from "./utils/middleware";

const app = express();

app.set("port", config.PORT);

const mongoUrl = config.MONGODB_URI;

if (mongoUrl) {
  mongoose
    .connect(mongoUrl)
    .then(() => {
      logger.info("Connected to MongoDB");
    })
    .catch((error: Error) => {
      logger.error("error connection to MongoDB:", error.message);
      process.exit(1);
    });
}
app.use(cors());
app.use(express.json());
app.use(middleware.requestLogger);

app.use("/api/v1/journeys", journeyRouter);
app.use("/api/v1/stations", stationRouter);

app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

export default app;
