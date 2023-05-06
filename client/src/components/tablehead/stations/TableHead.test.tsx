import { Data, Order } from "types/station.types";
import { useState } from "react";
import { stations } from "utils/test_helper";
import { render, screen } from "@testing-library/react";
import { Table } from "@mui/material";
import TableHead from "./TableHead";

function TestComponent() {
  const [order, setOrder] = useState<Order>("asc");
  const [orderBy, setOrderBy] = useState<keyof Data>("Nimi");
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
      const newSelected = stations.map((s: { Nimi: string }) => s.Nimi);
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
        rowCount={stations.length}
      />
    </Table>
  );
}

describe("<TableHead />", () => {
  it("renders all stations list view headers correctly", () => {
    render(<TestComponent />);

    const departureStationName = screen.getByTestId("station_table_header 1");
    expect(departureStationName).toHaveTextContent("Station: sorted asc");

    const returnStationName = screen.getByTestId("station_table_header 2");
    expect(returnStationName).toHaveTextContent("Address");

    const distanceTraveled = screen.getByTestId("station_table_header 3");
    expect(distanceTraveled).toHaveTextContent("City");
  });
});
