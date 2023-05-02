import type { StationDocument } from "../types";
import Station from "../models/station.model";

const findAllStations = async (): Promise<StationDocument[]> => {
  try {
    const foundStations = await Station.find();
    if (!Array.isArray(foundStations) || foundStations.length === 0) {
      throw new Error("No stations found");
    }
    return foundStations;
  } catch (error: any) {
    if (error instanceof Error) {
      throw new Error("Error finding stations: " + error.message);
    }
    throw new Error("Error finding stations");
  }
};

const createStation = async (
  station: StationDocument
): Promise<StationDocument> => {
  return station.save();
};

const findByName = async (Nimi: string): Promise<StationDocument> => {
  try {
    const foundStation = await Station.findOne({ Nimi });

    if (!foundStation) {
      throw new Error(`Station ${Nimi} not found`);
    }
    return foundStation;
  } catch (error: any) {
    if (error instanceof Error) {
      throw new Error("Error finding station: " + error.message);
    }
    throw new Error("Error finding station");
  }
};

export default { findAllStations, createStation, findByName };
