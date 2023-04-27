import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import Stations from "./Stations";

test("renders content", () => {
  render(<Stations />);
  const content = screen.getByText(/Stations/i);
  expect(content).toBeInTheDocument();
});
