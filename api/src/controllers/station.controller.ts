import { Request, Response, NextFunction } from "express";
import stationService from "../services/station.service";

// GET /stations
export const findAllStations = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.json(await stationService.findAllStations());
  } catch (error) {
    if (error instanceof Error && error.name == "ValidationError") {
      console.log("Invalid Request", 400, error);
    }
    next(error);
  }
};
