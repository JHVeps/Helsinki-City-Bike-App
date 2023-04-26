import type { JourneyDocument } from "../types";
import Journey from "../models/journey.model";

const findAllJourneys = async (): Promise<JourneyDocument[]> => {
  const foundJourney = await Journey.find().limit(1000);
  if (!foundJourney) {
    console.log("Journeys not found");
  }
  return foundJourney;
};

export default { findAllJourneys };
