import express from "express";

import {
  findAllJourneys,
  findResentJourneys,
} from "../controllers/journey.controller";
import { requireSignin } from "../controllers/auth.controller";

const router = express.Router();

// Every path we define here will get /api/v1/journeys prefix
router.get("/", findAllJourneys);
router.get("/recent", requireSignin, findResentJourneys);

export default router;
