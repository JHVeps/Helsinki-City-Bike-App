import mongoose from "mongoose";
import supertest from "supertest";
import app from "../app";

const api = supertest(app);

test("journeys are returned as json", async () => {
  await api
    .get("/api/v1/journeys")
    .expect(200)
    .expect("Content-Type", /application\/json/);
});

test("there are two journey documents", async () => {
  const response = await api.get("/api/v1/journeys");

  expect(response.body).toHaveLength(2);
});

test("the first journeys DepartureStationName is Laajalahden aukio", async () => {
  const response = await api.get("/api/v1/journeys");

  expect(response.body[0].DepartureStationName).toBe("Laajalahden aukio");
});

afterAll(async () => {
  await mongoose.connection.close();
});
