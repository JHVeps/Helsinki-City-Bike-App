import dotenv from "dotenv";
import express from "express";
import cors from "cors";

dotenv.config();

const app = express();

app.set("port", process.env.PORT);

app.use(
  cors({
    origin: "*",
  })
);

export default app;
