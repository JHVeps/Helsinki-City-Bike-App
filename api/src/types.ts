import { Document } from "mongoose";

export type JourneyDocument = Document & {
  Departure: Date;
  Return: Date;
  DepartureStationId: number;
  DepartureStationName: string;
  ReturnStationName: string;
  ReturnStationId: number;
  CoveredDistance: number;
  Duration: number;
};

export type Station = Document & {
  FID: number;
  ID: number;
  Nimi: string;
  Namn: string;
  Name: string;
  Osoite: string;
  Adress: string;
  Kaupunki: string;
  Stad: string;
  Operaattor: string;
  Kapasiteet: number;
  x: number;
  y: number;
};
