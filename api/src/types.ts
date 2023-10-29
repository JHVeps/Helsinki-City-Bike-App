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

export type StationDocument = Document & {
  FID: number;
  ID: number;
  Nimi: string;
  Namn: string;
  Name: string;
  Osoite: string;
  Adress: string;
  Kaupunki: string;
  Operaattor: string;
  Kapasiteet: number;
  x: number;
  y: number;
};

export type UserDocument = Document & {
  name: string;
  email: string;
  hashed_password: string;
  salt: string;
  role: string;
  resetPasswordLink: { data: string };
  // Define methods here
  authenticate(plainText: string): boolean;
  encryptPassword(password: string): string;
  makeSalt(): string;
};
