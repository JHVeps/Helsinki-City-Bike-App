import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "redux/store";
import { BrowserRouter as Router } from "react-router-dom";
import NewStation from "./NewStation";

describe("<NewStation />", () => {
  it("renders form labels, inputs and button", async () => {
    render(
      <Provider store={store}>
        <Router basename="/">
          <NewStation />
        </Router>
      </Provider>
    );

    const title = screen.getAllByText("ADD NEW STATION");
    expect(title).toBeDefined();

    const fidLabel = screen.getAllByText("FID");
    expect(fidLabel).toBeDefined();

    const fidInput = screen.getByPlaceholderText("FID");
    expect(fidInput).toBeDefined();

    const idLabel = screen.getAllByText("ID");
    expect(idLabel).toBeDefined();

    const idInput = screen.getByPlaceholderText("ID");
    expect(idInput).toBeDefined();

    const nameInput = screen.getByPlaceholderText("STATION NAME");
    expect(nameInput).toBeDefined();

    const osoiteInput = screen.getByPlaceholderText("ADDRESS");
    expect(osoiteInput).toBeDefined();

    const cityInput = screen.getAllByText("SELECT CITY");
    expect(cityInput).toBeDefined();

    const operatorInput = screen.getAllByText("SELECT OPERATOR");
    expect(operatorInput).toBeDefined();

    const capacityLabel = screen.getAllByText("CAPACITY");
    expect(capacityLabel).toBeDefined();

    const capInput = screen.getByPlaceholderText("CAPACITY");
    expect(capInput).toBeDefined();

    const lngLabel = screen.getAllByText("GOOGLE MAPS LONGITUDE");
    expect(lngLabel).toBeDefined();

    const lngInput = screen.getByPlaceholderText("LONGITUDE");
    expect(lngInput).toBeDefined();

    const ltdLabel = screen.getAllByText("GOOGLE MAPS LATITUDE");
    expect(ltdLabel).toBeDefined();

    const ltdInput = screen.getByPlaceholderText("LATITUDE");
    expect(ltdInput).toBeDefined();

    const addStationBtn = screen.getAllByTestId("add_station_button");
    expect(addStationBtn).toBeDefined();
  });
});
