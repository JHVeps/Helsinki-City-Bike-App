import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import Stations from "./Stations";

import { store } from "redux/store";
describe("<Stations />", () => {
  it("has correct title", () => {
    render(
      <Provider store={store}>
        <Router basename="/">
          <Stations title="test title" />
        </Router>
      </Provider>
    );
    const title = screen.getAllByText("test title");

    expect(title).toBeDefined();
  });
});
