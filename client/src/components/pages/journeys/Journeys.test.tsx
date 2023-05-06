import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import Journeys from "./Journeys";

import { store } from "redux/store";

test("<Journeys /> has correct title", () => {
  render(
    <Provider store={store}>
      <Router basename="/">
        <Journeys title="test title" />
      </Router>
    </Provider>
  );
  const title = screen.getAllByText("test title");

  expect(title).toBeDefined();
});
