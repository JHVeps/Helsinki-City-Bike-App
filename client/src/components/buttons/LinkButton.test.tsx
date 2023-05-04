import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import LinkButton from "./LinkButton";

describe("<LinkButton />", () => {
  test("<LinkButton /> link has style  textDecoration:none", () => {
    render(
      <BrowserRouter basename="/">
        <LinkButton
          textDecoration={"none"}
          color={"red"}
          fontSize={"1rem"}
          path={"/path"}
          title={"test title"}
        />
      </BrowserRouter>
    );

    const link = screen.getByRole("link");

    expect(link).toHaveStyle("textDecoration:none");
  });
  test("<LinkButton /> link has style color: red", () => {
    render(
      <BrowserRouter basename="/">
        <LinkButton
          textDecoration={"none"}
          color={"red"}
          fontSize={"1rem"}
          path={"/path"}
          title={"test title"}
        />
      </BrowserRouter>
    );

    const link = screen.getByRole("link");

    expect(link).toHaveStyle("color:red");
  });
  test("<LinkButton /> link has style fontSize:1rem", () => {
    render(
      <BrowserRouter basename="/">
        <LinkButton
          textDecoration={"none"}
          color={"red"}
          fontSize={"1rem"}
          path={"/path"}
          title={"test title"}
        />
      </BrowserRouter>
    );

    const link = screen.getByRole("link");

    expect(link).toHaveStyle("fontSize:1rem");
  });

  test("<LinkButton /> link have value to={/path}", () => {
    render(
      <BrowserRouter basename="/">
        <LinkButton
          textDecoration={"none"}
          color={"red"}
          fontSize={"1rem"}
          path={"/path"}
          title={"test title"}
        />
      </BrowserRouter>
    );

    const link = screen.getByRole("link");

    expect(link).toHaveAttribute("href", "/path");
  });

  test("<LinkButton /> renders title", () => {
    render(
      <BrowserRouter basename="/">
        <LinkButton
          textDecoration={"none"}
          color={"red"}
          fontSize={"1rem"}
          path={"/path"}
          title={"test title"}
        />
      </BrowserRouter>
    );

    const title = screen.getByText("test title");

    expect(title).toBeDefined();
  });
});
