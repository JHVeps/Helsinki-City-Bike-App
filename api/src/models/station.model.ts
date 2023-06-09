import mongoose from "mongoose";
import { StationDocument } from "../types";

const StationSchema = new mongoose.Schema({
  FID: {
    type: Number,
    required: true,
    unique: true,
  },
  ID: {
    type: Number,
    required: true,
    unique: true,
  },
  Nimi: {
    type: String,
    required: true,
  },
  Namn: {
    type: String,
  },
  Name: {
    type: String,
  },
  Osoite: {
    type: String,
    required: true,
  },
  Adress: {
    type: String,
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
  },
  y: {
    type: Number,
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
