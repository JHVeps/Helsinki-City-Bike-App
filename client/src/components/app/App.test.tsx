import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders content", () => {
  render(<App />);
  const content = screen.getByText(/HELSINKI CITY BIKE APP/i);
  expect(content).toBeInTheDocument();
});
