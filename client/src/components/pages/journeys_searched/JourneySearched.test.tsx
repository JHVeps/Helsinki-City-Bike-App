import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "redux/store";
import { BrowserRouter as Router } from "react-router-dom";
import JourneysSearched from "./JourneysSearched";

test("<JourneySearched />", () => {
  render(
    <Provider store={store}>
      <Router basename="/">
        <JourneysSearched />
      </Router>
    </Provider>
  );

  const notFound = screen.getAllByText("NOT FOUND");

  expect(notFound).toBeDefined();
});
