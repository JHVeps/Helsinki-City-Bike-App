import { render, screen } from "@testing-library/react";
import JourneyTable from "./JourneyTable";
import { journeys } from "utils/test_helper";
import { BrowserRouter } from "react-router-dom";

describe("<JourneyTable />", () => {
  test("<JourneyTable /> renders table", () => {
    render(
      <BrowserRouter basename="/">
        <JourneyTable journeys={journeys} text="" />
      </BrowserRouter>
    );
    const table = screen.getByRole("table");
    expect(table).toBeInTheDocument();
  });
});
