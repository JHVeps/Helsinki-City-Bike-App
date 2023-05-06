import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./Home";

describe("<HOME />", () => {
  it("renders home page title HOME", () => {
    render(
      <Router basename="/">
        <Home />
      </Router>
    );
    const title = screen.getAllByText("HOME");
    expect(title).toBeDefined();
  });
});
