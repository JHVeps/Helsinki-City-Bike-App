import { Data, Order } from "types/journey.types";
import { useState } from "react";
import { journeys } from "utils/test_helper";
import { render, screen } from "@testing-library/react";
import { Table } from "@mui/material";
import TableHead from "./TableHead";

function TestComponent() {
  const [order, setOrder] = useState<Order>("asc");
  const [orderBy, setOrderBy] = useState<keyof Data>("DepartureStationName");
  const [selected, setSelected] = useState<readonly string[]>([]);

  const handleRequestSort = (
    _event: React.MouseEvent<unknown>,
    property: keyof Data
  ) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = journeys.map(
        (j: { DepartureStationName: string }) => j.DepartureStationName
      );
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  return (
    <Table>
      <TableHead
        numSelected={selected.length}
        order={order}
        orderBy={orderBy}
        onSelectAllClick={handleSelectAllClick}
        onRequestSort={handleRequestSort}
        rowCount={journeys.length}
      />
    </Table>
  );
}

describe("<TableHead />", () => {
  it("renders all journeys list view headers correctly", () => {
    render(<TestComponent />);

    const departureStationName = screen.getByTestId("journeys_table_header 1");
    expect(departureStationName).toHaveTextContent(
      "Departure Station: sorted asc"
    );

    const returnStationName = screen.getByTestId("journeys_table_header 2");
    expect(returnStationName).toHaveTextContent("Return Station");

    const distanceTraveled = screen.getByTestId("journeys_table_header 3");
    expect(distanceTraveled).toHaveTextContent("Distance traveled (km)");

    const travelTime = screen.getByTestId("journeys_table_header 4");
    expect(travelTime).toHaveTextContent("Travel time (min)");
  });
});
