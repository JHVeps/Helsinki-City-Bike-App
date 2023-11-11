import express from "express";

import {
  findAllStations,
  createStation,
  findByName,
} from "../controllers/station.controller";
import { requireSignin, adminMiddleware } from "../controllers/auth.controller";

const router = express.Router();

// Every path we define here will get /api/v1/stations prefix
router.get("/", findAllStations);
router.get("/:Nimi", requireSignin, findByName);
router.post("/addstation", requireSignin, adminMiddleware, createStation);

export default router;
