import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./Home";

test("renders content", () => {
  render(
    <Router basename="/">
      <Home />
    </Router>
  );
  const headlines = screen.getAllByText("HOME");
  expect(headlines).toHaveLength(2);
});
