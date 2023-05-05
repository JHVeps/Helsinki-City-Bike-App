// import { render, screen } from "@testing-library/react";
// import InfoBoard from "./InfoBoard";
// import { Journey } from "types/journey.types";

// test("renders average distance of arriving journeys", () => {
//     const journeys: Journey[] = [

//                 {
//                   Departure: "2021-05-31T20:56:23.000Z",
//                   Return: "2021-05-31T21:29:58.000Z",
//                   DepartureStationId: 4,
//                   DepartureStationName: "Viiskulma",
//                   ReturnStationId: 65,
//                   ReturnStationName: "Hernesaarenranta",
//                   CoveredDistance: 4318,
//                   Duration: 2009,
//                   id: "644797e8e748236f7dd05b28"
//                 },
//                 {
//                   Departure: "2021-05-31T20:50:05.000Z",
//                   Return: "2021-05-31T21:01:22.000Z",
//                   DepartureStationId: 147,
//                   DepartureStationName: "Käpylän asema",
//                   ReturnStationId: 232,
//                   ReturnStationName: "Oulunkylän asema",
//                   CoveredDistance: 1633,
//                   Duration: 672,
//                   id: "644797e8e748236f7dd05b2f"
//                 },
//                 {
//                   Departure: "2021-05-31T20:48:44.000Z",
//                   Return: "2021-05-31T20:56:06.000Z",
//                   DepartureStationId: 235,
//                   DepartureStationName: "Katariina Saksilaisen katu",
//                   ReturnStationId: 239,
//                   ReturnStationName: "Viikin tiedepuisto",
//                   CoveredDistance: 2107,
//                   Duration: 437,
//                   id: "644797e8e748236f7dd05b36"
//                 },
//                 {
//                   Departure: "2021-05-31T20:43:05.000Z",
//                   Return: "2021-05-31T20:56:16.000Z",
//                   DepartureStationId: 90,
//                   DepartureStationName: "Paciuksenkaari",
//                   ReturnStationId: 72,
//                   ReturnStationName: "Eteläinen Hesperiankatu",
//                   CoveredDistance: 2779,
//                   Duration: 787,
//                   id: "644797e8e748236f7dd05b40"
//                 },
//                 {
//                   Departure: "2021-05-31T20:40:50.000Z",
//                   Return: "2021-05-31T20:43:16.000Z",
//                   DepartureStationId: 4,
//                   DepartureStationName: "Viiskulma",
//                   ReturnStationId: 3,
//                   ReturnStationName: "Kapteeninpuistikko",
//                   CoveredDistance: 565,
//                   Duration: 145,
//                   id: "644797e8e748236f7dd05b42"
//                 },
//                 {
//                   Departure: "2021-05-31T20:33:58.000Z",
//                   Return: "2021-05-31T20:49:52.000Z",
//                   DepartureStationId: 1,
//                   DepartureStationName: "Kaivopuisto",
//                   ReturnStationId: 57,
//                   ReturnStationName: "Lauttasaaren ostoskeskus",
//                   CoveredDistance: 4515,
//                   Duration: 954,
//                   id: "644797e8e748236f7dd05b4c"
//                 }

//             ]
//         const stationData = [
//             {
//               FID: 1,
//               ID: 501,
//               Nimi: "Hanasaari",
//               Namn: "Hanaholmen",
//               Name: "Hanasaari",
//               Osoite: "Hanasaarenranta 1",
//               Adress: "Hanaholmsstranden 1",
//               Kaupunki: "Espoo",
//               Operaattor: "CityBike Finland",
//               Kapasiteet: 10,
//               x: 24.840319,
//               y: 60.16582,
//               id: "6447b703f4a110da72b129e7"
//             },
//             {
//               FID: 2,
//               ID: 503,
//               Nimi: "Keilalahti",
//               Namn: "Kägelviken",
//               Name: "Keilalahti",
//               Osoite: "Keilalahdentie 2",
//               Adress: "Kägelviksvägen 2",
//               Kaupunki: "Espoo",
//               Operaattor: "CityBike Finland",
//               Kapasiteet: 28,
//               x: 24.827467,
//               y: 60.171524,
//               id: "6447b703f4a110da72b129e8"
//             },
//             {
//               FID: 3,
//               ID: 505,
//               Nimi: "Westendinasema",
//               Namn: "Westendstationen",
//               Name: "Westendinasema",
//               Osoite: "Westendintie 1",
//               Adress: "Westendvägen 1",
//               Kaupunki: "Espoo",
//               Operaattor: "CityBike Finland",
//               Kapasiteet: 16,
//               x: 24.805758,
//               y: 60.168266,
//               id: "6447b703f4a110da72b129e9"
//             },
//             {
//               FID: 6,
//               ID: 511,
//               Nimi: "Sateentie",
//               Namn: "Regnvägen",
//               Name: "Sateentie",
//               Osoite: "Sateentie 2",
//               Adress: "Regnvägen 2",
//               Kaupunki: "Espoo",
//               Operaattor: "CityBike Finland",
//               Kapasiteet: 18,
//               x: 24.810688,
//               y: 60.173424,
//               id: "6447b703f4a110da72b129ec"
//             },
//             {
//               FID: 7,
//               ID: 513,
//               Nimi: "Hakalehto",
//               Namn: "Hagliden",
//               Name: "Hakalehto",
//               Osoite: "Merituulentie 18",
//               Adress: "Havsvindsvägen 18",
//               Kaupunki: "Espoo",
//               Operaattor: "CityBike Finland",
//               Kapasiteet: 24,
//               x: 24.79139,
//               y: 60.173567,
//               id: "6447b703f4a110da72b129ed"
//             },

//           ]

//   const title = "My InfoBoard";
//   render(<InfoBoard journeys={journeys} stationData={stationData} title={title} />);
//   expect(screen.getByText("The average distance of a journey ending at the station: 16.5 km")).toBeInTheDocument();
//  });
export {};
