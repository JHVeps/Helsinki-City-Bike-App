import { render, screen } from "@testing-library/react";
import InfoBoard from "./InfoBoard";
import { journeys, stationData } from "utils/test_helper";

describe("<InfoBoard />", () => {
  test("<InfoBoard /> renders title Test Board", () => {
    render(
      <InfoBoard
        journeys={journeys}
        stationData={stationData}
        title="Test Board"
      />
    );

    const title = screen.getByText("Test Board");
    expect(title).toBeInTheDocument();
  });

  test("<InfoBoard /> renders average distance of departing journeys correctly", () => {
    render(
      <InfoBoard
        journeys={journeys}
        stationData={stationData}
        title="Test Board"
      />
    );
    const averageDepartingDistance = screen.getByTestId("avg_departing");
    expect(averageDepartingDistance).toBeInTheDocument();
    expect(averageDepartingDistance.textContent).toBe(
      "The average distance of a journey departing from this station: 5.1 km"
    );
  });
  test("<InfoBoard /> renders average distance of returning journeys correctly", () => {
    render(
      <InfoBoard
        journeys={journeys}
        stationData={stationData}
        title="Test Board"
      />
    );
    const averageReturningDistance = screen.getByTestId("avg_returning");
    expect(averageReturningDistance).toBeInTheDocument();
    expect(averageReturningDistance.textContent).toBe(
      "The average distance of a journey returning to this station: 5.1 km"
    );
  });
  test("<InfoBoard /> renders top destination stations correctly", () => {
    render(
      <InfoBoard
        journeys={journeys}
        stationData={stationData}
        title="Test Board"
      />
    );
    const mostJourneysDepartedTo = screen.getByTestId(
      "top5_destination_stations 1"
    );
    expect(mostJourneysDepartedTo).toBeInTheDocument();
    expect(mostJourneysDepartedTo.textContent).toBe("1. Viiskulma: 2");

    const secondMostJourneysDepartedTo = screen.getByTestId(
      "top5_destination_stations 2"
    );
    expect(secondMostJourneysDepartedTo).toBeInTheDocument();
    expect(secondMostJourneysDepartedTo.textContent).toBe(
      "2. Hernesaarenranta: 1"
    );
  });
});
