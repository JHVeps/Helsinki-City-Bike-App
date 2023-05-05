import { render, screen } from "@testing-library/react";
import JourneyTable from "./JourneyTable";
import { journeys } from "utils/test_helper";
import { BrowserRouter } from "react-router-dom";

describe("<JourneyTable />", () => {
  test("<JourneyTable /> renders first row of table table", () => {
    render(
      <BrowserRouter basename="/">
        <JourneyTable journeys={journeys} text="" />
      </BrowserRouter>
    );
    const firstTableRow = screen.getByTestId("journey_info_row 1");
    expect(firstTableRow).toBeInTheDocument();

    // eslint-disable-next-line testing-library/no-debugging-utils
    screen.debug(firstTableRow);
  });
  test("<JourneyTable /> renders all rows", () => {
    render(
      <BrowserRouter basename="/">
        <JourneyTable journeys={journeys} text="" />
      </BrowserRouter>
    );
    const tableRows = screen.getAllByTestId(/journey_info_row \d+/);
    expect(tableRows.length).toBe(journeys.length);
  });

  it("<JourneyTable /> renders first row correctly", () => {
    render(
      <BrowserRouter basename="/">
        <JourneyTable journeys={journeys} text="" />
      </BrowserRouter>
    );
    const departureStation = screen.getByTestId("journey_departure_station 1");
    expect(departureStation).toHaveTextContent("Hanasaari");

    const returnStation = screen.getByTestId("journey_return_station 1");
    expect(returnStation).toHaveTextContent("Hernesaarenranta");

    const journeyDistance = screen.getByTestId("journey_distance 1");
    expect(journeyDistance).toHaveTextContent("4.3");

    const journeyDuration = screen.getByTestId("journey_duration 1");
    expect(journeyDuration).toHaveTextContent("33");
  });
});
