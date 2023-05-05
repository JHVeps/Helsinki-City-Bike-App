import { Station } from "types/station.types";

export const journeys = {
  items: [
    {
      Departure: "2021-05-31T20:56:23.000Z",
      Return: "2021-05-31T21:29:58.000Z",
      DepartureStationId: 501,
      DepartureStationName: "Hanasaari",
      ReturnStationId: 65,
      ReturnStationName: "Hernesaarenranta",
      CoveredDistance: 4318,
      Duration: 2009,
      id: "0000000",
    },
    {
      Departure: "2021-05-31T20:50:05.000Z",
      Return: "2021-05-31T21:30:22.000Z",
      DepartureStationId: 501,
      DepartureStationName: "Hanasaari",
      ReturnStationId: 4,
      ReturnStationName: "Viiskulma",
      CoveredDistance: 5854,
      Duration: 2427,
      id: "1111111",
    },
    {
      Departure: "2021-05-31T20:56:23.000Z",
      Return: "2021-05-31T21:29:58.000Z",
      DepartureStationId: 65,
      DepartureStationName: "Hernesaarenranta",
      ReturnStationId: 501,
      ReturnStationName: "Hanasaari",
      CoveredDistance: 4318,
      Duration: 2009,
      id: "2222222",
    },
    {
      Departure: "2021-05-31T20:50:05.000Z",
      Return: "2021-05-31T21:30:22.000Z",
      DepartureStationId: 4,
      DepartureStationName: "Viiskulma",
      ReturnStationId: 501,
      ReturnStationName: "Hanasaari",
      CoveredDistance: 5854,
      Duration: 2427,
      id: "4444444",
    },
  ],
  isLoading: false,
  error: false,
  item: {
    id: "",
    Departure: new Date().toISOString(), // Convert to ISO string
    Return: new Date().toISOString(), // Convert to ISO string
    DepartureStationId: 0,
    DepartureStationName: "",
    ReturnStationName: "",
    ReturnStationId: 0,
    CoveredDistance: 0,
    Duration: 0,
  },
};

// test data
export const stationData: Station = {
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
};