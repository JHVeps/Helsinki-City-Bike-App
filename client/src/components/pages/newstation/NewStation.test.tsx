import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "redux/store";
import { BrowserRouter as Router } from "react-router-dom";
import NewStation from "./NewStation";

test("<NewStation /> renders title", async () => {
  render(
    <Provider store={store}>
      <Router basename="/">
        <NewStation />
      </Router>
    </Provider>
  );

  const title = screen.getAllByText("ADD NEW STATION");

  // eslint-disable-next-line testing-library/no-debugging-utils
  screen.debug();

  expect(title).toBeDefined();
});
