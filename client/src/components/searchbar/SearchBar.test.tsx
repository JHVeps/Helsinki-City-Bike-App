import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import SearchBar from "./SearchBar";

describe("<SearchBar />", () => {
  it("has correct url value and button title", () => {
    render(
      <Router basename="/">
        <SearchBar url="/this is a test url" buttonTitle="test title" />
      </Router>
    );

    const url = screen.getByTestId("searchbar_link");
    expect(url).toHaveAttribute("href", "/this is a test url");

    const btnTitle = screen.getByTestId("searchbar_btn");
    expect(btnTitle).toHaveTextContent("test title");
  });
});
