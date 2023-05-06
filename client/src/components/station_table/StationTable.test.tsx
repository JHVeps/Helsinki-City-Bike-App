import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import StationTable from "./StationTable";
import { stations } from "utils/test_helper";

describe("<StationTable />", () => {
  it("renders first row of table", () => {
    render(
      <BrowserRouter basename="/">
        <StationTable
          stations={stations}
          text=""
          pending={false}
          error={false}
        />
      </BrowserRouter>
    );
    const firstTableRow = screen.getByTestId("station_info_row 1");
    expect(firstTableRow).toBeInTheDocument();
  });

  it("renders all rows", () => {
    render(
      <BrowserRouter basename="/">
        <StationTable
          stations={stations}
          text=""
          pending={false}
          error={false}
        />
      </BrowserRouter>
    );
    const tableRows = screen.getAllByTestId(/station_info_row \d+/);
    expect(tableRows.length).toBe(stations.length);
  });

  it("renders all information to first row correctly", () => {
    render(
      <BrowserRouter basename="/">
        <StationTable
          stations={stations}
          text=""
          pending={false}
          error={false}
        />
      </BrowserRouter>
    );
    const departureStation = screen.getByTestId("station_name 1");
    expect(departureStation).toHaveTextContent("Keilalahti");

    const returnStation = screen.getByTestId("station_address 1");
    expect(returnStation).toHaveTextContent("Keilalahdentie 2");

    const journeyDistance = screen.getByTestId("station_city 1");
    expect(journeyDistance).toHaveTextContent("Espoo");
  });

  it("renders row correctly when city is not provided, default city should be Helsinki", () => {
    render(
      <BrowserRouter basename="/">
        <StationTable
          stations={stations}
          text=""
          pending={false}
          error={false}
        />
      </BrowserRouter>
    );
    const departureStation = screen.getByTestId("station_name 3");
    expect(departureStation).toHaveTextContent("test nimi");

    const returnStation = screen.getByTestId("station_address 3");
    expect(returnStation).toHaveTextContent("test osoite");

    const journeyDistance = screen.getByTestId("station_city 3");
    expect(journeyDistance).toHaveTextContent("Helsinki");
  });
});
