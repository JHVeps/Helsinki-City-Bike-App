/// <reference types="cypress" />
import { API_URL, CLIENT_URL } from "../../secrets/secrets";
const apiUrl = API_URL;
const clientUrl = CLIENT_URL;
describe("Helsinki City Bike App", function () {
  beforeEach(function () {
    cy.request("POST", `${apiUrl}/testing/reset`);
    cy.visit(clientUrl);
    cy.wait(500);
  });

  it("Landing page can be opened", function () {
    cy.contains("HELSINKI CITY BIKE APP").should("be.visible");
    cy.contains("HOME").should("be.visible");
    cy.contains("JOURNEYS LIST").should("be.visible");
    cy.contains("STATIONS LIST").should("be.visible");
    cy.wait(1000);
  });

  it("journeys list view can be opened", function () {
    cy.contains("JOURNEYS LIST").click();
    cy.wait(500);
    cy.contains("Journeys List").should("be.visible");
    cy.wait(1000);
  });

  it("stations list view can be opened", function () {
    cy.contains("STATIONS LIST").click();
    cy.wait(500);
    cy.contains("Stations List").should("be.visible");
    cy.wait(1000);
  });

  it("add new station can be opened", function () {
    cy.contains("STATIONS LIST").click();
    cy.contains("ADD NEW STATION").click();
    cy.contains("ADD NEW STATION").should("be.visible");
    cy.contains("ADD STATION").should("be.visible");
    cy.wait(1000);
  });

  describe("Helsinki City Bike App/ journeys", function () {
    beforeEach(function () {
      cy.visit(`${clientUrl}/journeys`);
      cy.wait(500);
    });
    it("journey can be searched", function () {
      cy.get('[data-cy="search-input"]').type("Töölöntulli");
      cy.wait(500);
      cy.contains("SEARCH").click();
      cy.wait(1000);
      cy.contains("FOUND DEPARTED JOURNEYS FROM: Töölöntulli").should(
        "be.visible"
      );
      cy.wait(1000);
    });

    it("should link to single station view when Departure station name (Keilalahti) clicked", function () {
      cy.contains("Keilalahti").click();
      cy.wait(500);
      cy.contains("STATION INFO").should("be.visible");
      cy.contains("Keilalahdentie 2").should("be.visible");
      cy.contains("DETAILED INFORMATION").should("be.visible");
      cy.wait(1000);
    });

    it("should filter journeys list when typed to filter field", function () {
      cy.get('[data-cy="filter-input"]').type("ke");
      cy.wait(500);
      cy.contains("Keilalahti").should("be.visible");
      cy.contains("Laajalahden aukio").should("not.exist");
      cy.contains("Töölöntulli").should("not.exist");
      cy.wait(1000);
    });
  });

  describe("Helsinki City Bike App/ stations", function () {
    beforeEach(function () {
      cy.visit(`${clientUrl}/stations`);
    });
    it("should link to single station view when station name is typed and SEARCH button is clicked", function () {
      cy.get('[data-cy="search-input"]').type("Hanasaari");
      cy.contains("SEARCH").click();
      cy.wait(500);
      cy.contains("STATION INFO").should("be.visible");
      cy.contains("Hanasaarenranta 1").should("be.visible");
      cy.contains("DETAILED INFORMATION").should("be.visible");
      cy.wait(1000);
    });

    it("should link to single station view when station name is clicked", function () {
      cy.contains("Hanasaari").click();
      cy.contains("STATION INFO").should("be.visible");
      cy.contains("Hanasaarenranta 1").should("be.visible");
      cy.contains("DETAILED INFORMATION").should("be.visible");
      cy.wait(1000);
    });

    it("should filter stations list when typed to filter field", function () {
      cy.get('[data-cy="filter-input"]').type("ha");
      cy.wait(500);
      cy.contains("Hanasaari").should("be.visible");
      cy.contains("Keilalahti").should("not.exist");
      cy.wait(1000);
    });

    it("should add a new station when all the REQUIRED information is provided", function () {
      cy.contains("ADD NEW STATION").click();
      cy.get('[data-cy="station-FID-input"]').type("1111");
      cy.get('[data-cy="station-ID-input"]').type("1111");
      cy.get('[data-cy="station-Nimi-input"]').type("Cypress-test-Nimi");
      cy.get('[data-cy="station-Osoite-input"]').type("Cypress-test-Osoite");
      cy.get('[data-cy="station-Kaupunki-input"]').select("Helsinki");
      cy.get('[data-cy="station-Operaattor-input"]').select("CityBike Finland");
      cy.get('[data-cy="add-station-button"]').click();
      cy.wait(1000);
      cy.contains("Cypress-test-Nimi").should("be.visible");
      cy.contains("Cypress-test-Osoite").should("be.visible");
      cy.wait(1000);
    });

    it("should show error when trying to add station with existing FID: 1", function () {
      cy.contains("ADD NEW STATION").click();
      cy.get('[data-cy="station-FID-input"]').type("1");
      cy.get('[data-cy="station-ID-input"]').type("1111");
      cy.get('[data-cy="station-Nimi-input"]').type("Cypress-test-nimi");
      cy.get('[data-cy="station-Osoite-input"]').type("Cypress-test-Osoite");
      cy.get('[data-cy="station-Kaupunki-input"]').select("Helsinki");
      cy.get('[data-cy="station-Operaattor-input"]').select("CityBike Finland");
      cy.get('[data-cy="add-station-button"]').click();
      cy.wait(1000);
      cy.contains("ERROR").should("be.visible");
      cy.wait(1000);
    });

    it("should show error when trying to add station with existing ID: 501", function () {
      cy.contains("ADD NEW STATION").click();
      cy.get('[data-cy="station-FID-input"]').type("1111");
      cy.get('[data-cy="station-ID-input"]').type("501");
      cy.get('[data-cy="station-Nimi-input"]').type("Cypress-test-nimi");
      cy.get('[data-cy="station-Osoite-input"]').type("Cypress-test-Osoite");
      cy.get('[data-cy="station-Kaupunki-input"]').select("Helsinki");
      cy.get('[data-cy="station-Operaattor-input"]').select("CityBike Finland");
      cy.get('[data-cy="add-station-button"]').click();
      cy.wait(1000);
      cy.contains("ERROR").should("be.visible");
      cy.wait(1000);
    });
  });
});
