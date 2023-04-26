import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import Home from "./Home";

test("renders content", () => {
  render(<Home />);
  const content = screen.getByText(/Home/i);
  expect(content).toBeInTheDocument();
});
