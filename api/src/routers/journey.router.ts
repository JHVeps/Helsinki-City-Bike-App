import express from "express";

import { findAllJourneys } from "../controllers/journey.controller";

const router = express.Router();

// Every path we define here will get /api/v1/journeys prefix
router.get("/", findAllJourneys);

export default router;
