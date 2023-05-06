import { Request, Response, NextFunction } from "express";
import stationService from "../services/station.service";
import Station from "../models/station.model";

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

// POST /station
export const createStation = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const {
      FID,
      ID,
      Nimi,
      Namn,
      Name,
      Osoite,
      Adress,
      Kaupunki,
      Operaattor,
      Kapasiteet,
      x,
      y,
    } = req.body;

    const station = new Station({
      FID,
      ID,
      Nimi,
      Namn,
      Name,
      Osoite,
      Adress,
      Kaupunki,
      Operaattor,
      Kapasiteet,
      x,
      y,
    });

    await stationService.createStation(station);
    res.status(201).json(station);
  } catch (error) {
    if (error instanceof Error && error.name == "ValidationError") {
      console.log("Invalid Request", 400, error);
    } else {
      next(error);
    }
  }
};

// GET /stations/:Name
export const findByName = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.json(await stationService.findByName(req.params.Nimi));
  } catch (error) {
    if (error instanceof Error && error.name == "ValidationError") {
      console.log("Invalid Request", 400, error);
    } else {
      next(error);
    }
  }
};
