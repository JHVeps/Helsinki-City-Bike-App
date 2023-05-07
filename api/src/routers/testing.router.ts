import express from "express";
import Station from "../models/station.model";

const router = express.Router();

const initialStations = [
  {
    FID: 1,
    ID: 501,
    Nimi: "Hanasaari",
    Namn: "Hanaholmen",
    Name: "Hanasaari",
    Osoite: "Hanasaarenranta 1",
    Adress: "Hanaholmsstranden 1",
    Kaupunki: "Espoo",
    Operaattor: "CityBike Finland",
    Kapasiteet: 10,
    x: 24.840319,
    y: 60.16582,
  },
  {
    FID: 2,
    ID: 503,
    Nimi: "Keilalahti",
    Namn: "Kägelviken",
    Name: "Keilalahti",
    Osoite: "Keilalahdentie 2",
    Adress: "Kägelviksvägen 2",
    Kaupunki: "Espoo",
    Operaattor: "CityBike Finland",
    Kapasiteet: 28,
    x: 24.827467,
    y: 60.171524,
  },
];

router.post("/reset", async (request, response) => {
  await Station.deleteMany({});
  let noteObject = new Station(initialStations[0]);
  await noteObject.save();
  noteObject = new Station(initialStations[1]);
  await noteObject.save();

  response.status(204).end();
});

export default router;
