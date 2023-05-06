import mongoose from "mongoose";
import { StationDocument } from "../types";

const StationSchema = new mongoose.Schema({
  FID: {
    type: Number,
    required: true,
  },
  ID: {
    type: Number,
    required: true,
  },
  Nimi: {
    type: String,
    required: true,
  },
  Namn: {
    type: String,
    required: true,
  },
  Name: {
    type: String,
    required: true,
  },
  Osoite: {
    type: String,
    required: true,
  },
  Adress: {
    type: String,
    required: true,
  },
  Kaupunki: {
    type: String,
  },
  Operaattor: {
    type: String,
  },
  Kapasiteet: {
    type: Number,
    required: true,
  },
  x: {
    type: Number,
    required: true,
  },
  y: {
    type: Number,
    required: true,
  },
});

StationSchema.set("toJSON", {
  transform: (_document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

export default mongoose.model<StationDocument>("station", StationSchema);
