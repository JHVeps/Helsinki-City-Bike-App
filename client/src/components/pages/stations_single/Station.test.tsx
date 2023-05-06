import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "redux/store";
import { BrowserRouter as Router } from "react-router-dom";
import Station from "./Station";

describe("<Station />", () => {
  it("renders NOT FOUND text", () => {
    render(
      <Provider store={store}>
        <Router basename="/">
          <Station />
        </Router>
      </Provider>
    );

    const notFound = screen.getAllByText("NOT FOUND");
    expect(notFound).toBeDefined();
  });
});
