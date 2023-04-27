import mongoose from "mongoose";
import supertest from "supertest";
import app from "../app";
import Station from "../models/station.model";

const api = supertest(app);

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

beforeEach(async () => {
  await Station.deleteMany({});
  let noteObject = new Station(initialStations[0]);
  await noteObject.save();
  noteObject = new Station(initialStations[1]);
  await noteObject.save();
});

test("stations are returned as json", async () => {
  await api
    .get("/api/v1/stations")
    .expect(200)
    .expect("Content-Type", /application\/json/);
});

test("there are two station documents", async () => {
  const response = await api.get("/api/v1/stations");

  expect(response.body).toHaveLength(initialStations.length);
});

test("the first stations Name is Hanasaari", async () => {
  const response = await api.get("/api/v1/stations");

  expect(response.body[0].Name).toBe("Hanasaari");
});

test("a specific Osoite is within the returned stations", async () => {
  const response = await api.get("/api/v1/stations");

  const contents = response.body.map((r: { Osoite: string }) => r.Osoite);

  expect(contents).toContain("Keilalahdentie 2");
});

afterAll(async () => {
  await mongoose.connection.close();
});