import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import AppBar from "./AppBar";

test("renders content", () => {
  render(<AppBar title={""} />);
  const content = screen.getByText(/Journey/i);
  expect(content).toBeInTheDocument();
});
