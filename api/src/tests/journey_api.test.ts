import mongoose from "mongoose";
import supertest from "supertest";
import app from "../app";
import Journey from "../models/journey.model";

const api = supertest(app);

const initialJourneys = [
  {
    id: "644797e8e748236f7dd05b25",
    Departure: "2021-05-31T20:57:25.000Z",
    Return: "2021-05-31T21:05:46.000Z",
    DepartureStationId: 94,
    DepartureStationName: "Laajalahden aukio",
    ReturnStationId: 100,
    ReturnStationName: "Teljäntie",
    CoveredDistance: 2043,
    Duration: 500,
  },
  {
    id: "644797e8e748236f7dd05b26",
    Departure: "2021-05-31T20:56:59.000Z",
    Return: "2021-05-31T21:07:14.000Z",
    DepartureStationId: 82,
    DepartureStationName: "Töölöntulli",
    ReturnStationId: 113,
    ReturnStationName: "Pasilan asema",
    CoveredDistance: 1870,
    Duration: 611,
  },
];

beforeEach(async () => {
  await Journey.deleteMany({});
  let noteObject = new Journey(initialJourneys[0]);
  await noteObject.save();
  noteObject = new Journey(initialJourneys[1]);
  await noteObject.save();
});

test("journeys are returned as json", async () => {
  await api
    .get("/api/v1/journeys")
    .expect(200)
    .expect("Content-Type", /application\/json/);
});

test("there are two journey documents", async () => {
  const response = await api.get("/api/v1/journeys");

  //expect(response.body).toHaveLength(2);
  expect(response.body).toHaveLength(initialJourneys.length);
});

test("the first journeys DepartureStationName is Laajalahden aukio", async () => {
  const response = await api.get("/api/v1/journeys");

  expect(response.body[0].DepartureStationName).toBe("Laajalahden aukio");
});

test("a specific DepartureStationName is within the returned journeys", async () => {
  const response = await api.get("/api/v1/journeys");

  const contents = response.body.map(
    (r: { DepartureStationName: string }) => r.DepartureStationName
  );

  expect(contents).toContain("Töölöntulli");
});

afterAll(async () => {
  await mongoose.connection.close();
});
