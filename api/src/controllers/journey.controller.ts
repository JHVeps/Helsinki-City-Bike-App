import { Request, Response, NextFunction } from "express";
import journeyService from "../services/journey.service";

// GET /journeys
export const findAllJourneys = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.json(await journeyService.findAllJourneys());
  } catch (error) {
    if (error instanceof Error && error.name == "ValidationError") {
      console.log("Invalid Request", 400, error);
    }
    next(error);
  }
};
