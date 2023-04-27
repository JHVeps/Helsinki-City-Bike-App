import express from "express";

import { findAllStations } from "../controllers/station.controller";

const router = express.Router();

// Every path we define here will get /api/v1/stations prefix
router.get("/", findAllStations);

export default router;
