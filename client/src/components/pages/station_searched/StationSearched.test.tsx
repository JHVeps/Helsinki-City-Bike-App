import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "redux/store";
import { BrowserRouter as Router } from "react-router-dom";
import StationSearched from "./StationSearched";

describe("<StationSearched />", () => {
  it("renders NOT FOUND text", () => {
    render(
      <Provider store={store}>
        <Router basename="/">
          <StationSearched />
        </Router>
      </Provider>
    );

    const notFound = screen.getAllByText("NOT FOUND");
    expect(notFound).toBeDefined();
  });
});
