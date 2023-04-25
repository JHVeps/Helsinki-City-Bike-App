import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders content", () => {
  render(<App />);
  const content = screen.getByText(/App/i);
  expect(content).toBeInTheDocument();
});
