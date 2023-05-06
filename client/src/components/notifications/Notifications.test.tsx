import { render, screen } from "@testing-library/react";
import TableHeadNotification from "./ListNotification";

describe("<TableHeadNotification />", () => {
  test("<TableHeadNotification /> has correct color", () => {
    render(<TableHeadNotification color="black as night" text="test title" />);
    const color = screen.getByTestId("notification_txt");
    expect(color).toHaveStyle("color: black as night");
  });

  test("<TableHeadNotification /> has correct text", () => {
    render(<TableHeadNotification color="black as night" text="test title" />);
    const title = screen.getByTestId("notification_txt");
    expect(title).toHaveTextContent("test title");
  });
});
