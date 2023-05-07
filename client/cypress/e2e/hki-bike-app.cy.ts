/// <reference types="cypress" />
describe("Helsinki City Bike App", function () {
  beforeEach(function () {
    cy.visit("http://localhost:3000");
  });

  it("Landing page can be opened", function () {
    cy.contains("HELSINKI CITY BIKE APP");
    cy.contains("HOME");
    cy.contains("JOURNEYS LIST");
    cy.contains("STATIONS LIST");
  });

  it("journeys list view can be opened", function () {
    cy.contains("JOURNEYS LIST").click();
    cy.contains("Journeys List");
  });

  it("stations list view can be opened", function () {
    cy.contains("STATIONS LIST").click();
    cy.contains("Stations List");
  });

  it("add new station can be opened", function () {
    cy.contains("STATIONS LIST").click();
    cy.contains("ADD NEW STATION").click();
    cy.contains("ADD NEW STATION");
    cy.contains("ADD STATION");
  });

  describe("Helsinki City Bike App/ journeys list", function () {
    beforeEach(function () {
      cy.visit("http://localhost:3000/journeys");
    });
    it("journey can be searched", function () {
      cy.visit("http://localhost:3000/journeys");
      cy.get('[data-cy="search-input"]').type("Töölöntulli");
      cy.contains("SEARCH").click();
      cy.contains("FOUND DEPARTED JOURNEYS FROM: Töölöntulli").should(
        "be.visible"
      );
    });

    it("should link to single station view when Departure station name (Keilalahti) clicked", function () {
      cy.visit("http://localhost:3000/journeys");
      cy.contains("Keilalahti").click();
      cy.contains("STATION INFO").should("be.visible");
      cy.contains("Keilalahdentie 2").should("be.visible");
      cy.contains("DETAILED INFORMATION").should("be.visible");
    });

    it("should filter journey list when typed to filter field", function () {
      cy.visit("http://localhost:3000/journeys");
      cy.get('[data-cy="filter-input"]').type("ke");
      cy.wait(1000);
      cy.contains("Keilalahti").should("be.visible");
      cy.contains("Laajalahden aukio").should("not.exist");
      cy.contains("Töölöntulli").should("not.exist");
    });
  });

  describe("Helsinki City Bike App/ stations", function () {
    beforeEach(function () {
      cy.visit("http://localhost:3000/stations");
    });
    it("should link to single station view when station name is typed and SEARCH button is clicked", function () {
      cy.get('[data-cy="search-input"]').type("Hanasaari");
      cy.contains("SEARCH").click();
      cy.contains("STATION INFO").should("be.visible");
      cy.contains("Hanasaarenranta 1").should("be.visible");
      cy.contains("DETAILED INFORMATION").should("be.visible");
    });

    it("should link to single station view when station name is clicked", function () {
      cy.contains("Hanasaari").click();
      cy.contains("STATION INFO").should("be.visible");
      cy.contains("Hanasaarenranta 1").should("be.visible");
      cy.contains("DETAILED INFORMATION").should("be.visible");
    });
  });
});
