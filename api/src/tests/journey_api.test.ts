import mongoose from "mongoose";
import supertest from "supertest";
import app from "../app";
import Journey from "../models/journey.model";

const api = supertest(app);

const initialJourneys = [
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
    id: "64579c0441a33bcd24b14102",
    Departure: "2021-05-31T20:14:11.000+00:00",
    Return: "2021-05-31T20:23:28.000+00:00",
    DepartureStationId: 2,
    DepartureStationName: "Keilalahti",
    ReturnStationId: 513,
    ReturnStationName: "Hakalehto",
    CoveredDistance: 2532,
    Duration: 556,
  },
];

describe("when there is initially some journeys saved", () => {
  beforeEach(async () => {
    await Journey.deleteMany({});
    let journeyObject = new Journey(initialJourneys[0]);
    await journeyObject.save();
    journeyObject = new Journey(initialJourneys[1]);
    await journeyObject.save();
    journeyObject = new Journey(initialJourneys[2]);
    await journeyObject.save();
  });

  test("journeys are returned as json", async () => {
    await api
      .get("/api/v1/journeys")
      .expect(200)
      .expect("Content-Type", /application\/json/);
  });

  test("there are two journey documents", async () => {
    const response = await api.get("/api/v1/journeys");

    expect(response.body).toHaveLength(initialJourneys.length);
  });

  test("the first journeys DepartureStationName is Töölöntulli", async () => {
    const response = await api.get("/api/v1/journeys");

    expect(response.body[0].DepartureStationName).toBe("Töölöntulli");
  });

  test("a specific DepartureStationName is within the returned journeys", async () => {
    const response = await api.get("/api/v1/journeys");

    const contents = response.body.map(
      (r: { DepartureStationName: string }) => r.DepartureStationName
    );

    expect(contents).toContain("Laajalahden aukio");
  });

  describe("when initially saved journeys should be returned in specific order", () => {
    test("Most recent journey is retuned first", async () => {
      const response = await api.get("/api/v1/journeys/recent");

      expect(response.body[0].DepartureStationName).toBe("Laajalahden aukio");
    });
  });
});
afterAll(async () => {
  await mongoose.connection.close();
});
