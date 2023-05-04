import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import AppBar from "./AppBar";
import { SetStateAction } from "react";

describe("<LinkButton />", () => {
  test("<AppBar /> renders title", () => {
    render(
      <AppBar
        title={"Test Title"}
        text={""}
        setText={function (value: SetStateAction<string>): void {
          throw new Error("Function not implemented.");
        }}
      />
    );
    const title = screen.getByText("Test Title");
    expect(title).toBeDefined();
  });

  test("<AppBar />texfield has value=this is test text", () => {
    render(
      <AppBar
        title={"Test Title"}
        text={"this is test text"}
        setText={function (value: SetStateAction<string>): void {
          throw new Error("Function not implemented.");
        }}
      />
    );
    const textfield = screen.getByRole("textbox");
    expect(textfield).toHaveAttribute("value", "this is test text");
  });
});
