import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import JourneyAppBar from "./JourneyAppBar";

test("renders content", () => {
  render(<JourneyAppBar />);
  const content = screen.getByText(/Journey/i);
  expect(content).toBeInTheDocument();
});
