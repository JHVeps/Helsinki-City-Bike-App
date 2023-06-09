import mongoose from "mongoose";
import { Station } from "../types";

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
  Stad: {
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
    type: String,
    required: true,
  },
  y: {
    type: Number,
    required: true,
  },
});

export default mongoose.model<Station>("station", StationSchema);
