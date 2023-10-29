import express from "express";
import config from "./utils/config";
import mongoose from "mongoose";
import logger from "./utils/logger";
import morgan from "morgan";
import bodyParser from "body-parser";
import cors from "cors";
import authRouter from "./routers/auth.router";
import journeyRouter from "./routers/journey.router";
import stationRouter from "./routers/station.router";
import testingRouter from "./routers/testing.router";
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

app.use(morgan("dev"));
app.use(bodyParser.json());

app.use(cors());
app.use(express.json());
app.use(middleware.requestLogger);

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/journeys", journeyRouter);
app.use("/api/v1/stations", stationRouter);

if (process.env.NODE_ENV === "test") {
  app.use("/api/v1/testing", testingRouter);
}

app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

export default app;
