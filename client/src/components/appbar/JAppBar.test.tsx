import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import JAppBar from "./JAppBar";

test("renders content", () => {
  render(<JAppBar />);
  const content = screen.getByText(/Journey/i);
  expect(content).toBeInTheDocument();
});
