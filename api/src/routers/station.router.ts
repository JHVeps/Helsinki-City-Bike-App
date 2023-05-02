import express from "express";

import {
  findAllStations,
  createStation,
  findByName,
} from "../controllers/station.controller";

const router = express.Router();

// Every path we define here will get /api/v1/stations prefix
router.get("/", findAllStations);
router.get("/:Nimi", findByName);
router.post("/addstation", createStation);

export default router;
