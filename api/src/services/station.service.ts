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

export default { findAllStations };
