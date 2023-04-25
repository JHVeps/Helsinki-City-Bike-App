import mongoose from "mongoose";
import { JourneyDocument } from "../types";

const JourneySchema = new mongoose.Schema({
  Departure: {
    type: Date,
    required: true,
  },
  Return: {
    type: Date,
    required: true,
  },
  DepartureStationId: {
    type: Number,
    required: true,
  },
  DepartureStationName: {
    type: String,
    required: true,
  },
  ReturnStationId: {
    type: Number,
    required: true,
  },
  ReturnStationName: {
    type: String,
    required: true,
  },
  CoveredDistance: {
    type: Number,
    min: 10,
    required: true,
  },
  Duration: {
    type: Number,
    min: 10,
    required: true,
  },
});

JourneySchema.set("toJSON", {
  transform: (_document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

export default mongoose.model<JourneyDocument>("journey", JourneySchema);
