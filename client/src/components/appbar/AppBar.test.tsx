import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import AppBar from "./AppBar";
import { SetStateAction } from "react";

test("renders content", () => {
  render(
    <AppBar
      title={""}
      text={""}
      setText={function (value: SetStateAction<string>): void {
        throw new Error("Function not implemented.");
      }}
    />
  );
  const content = screen.getByText(/Journey/i);
  expect(content).toBeInTheDocument();
});
