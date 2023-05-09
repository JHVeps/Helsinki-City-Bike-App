import type { JourneyDocument } from "../types";
import Journey from "../models/journey.model";
import { MAX_LIMIT_ALL, MAX_LIMIT_RESENT } from "../constants/constants";

const findAllJourneys = async (): Promise<JourneyDocument[]> => {
  try {
    const foundJourneys = await Journey.find().limit(MAX_LIMIT_ALL);
    if (!Array.isArray(foundJourneys) || foundJourneys.length === 0) {
      throw new Error("Journeys not found");
    }
    return foundJourneys;
  } catch (error: any) {
    throw new Error("Error finding journeys: " + error.message);
  }
};

const findResentJourneys = async (): Promise<JourneyDocument[]> => {
  try {
    const foundJourneys = await Journey.find({
      Departure: { $lte: new Date() }, // retrieve documents with departure date <= current date
    })
      .sort({ Departure: -1 })
      .limit(MAX_LIMIT_RESENT);
    if (!Array.isArray(foundJourneys) || foundJourneys.length === 0) {
      throw new Error("Journeys not found");
    }
    return foundJourneys;
  } catch (error: any) {
    throw new Error("Error finding journeys: " + error.message);
  }
};

export default { findAllJourneys, findResentJourneys };
