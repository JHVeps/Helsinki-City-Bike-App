import { Box, Paper, TableContainer, Table } from "@mui/material";
import TableBodyHome from "components/tablebody/TableBodyHome";
import TableHeadHome from "components/tablehead/TableHeadHome";
import { useState } from "react";
import { useAppSelector } from "redux/hooks";
import { RootState } from "redux/store";
import { Data, Order } from "types";

const JourneyTable = () => {
  const { journeys } = useAppSelector((state: RootState) => state);
  const [selected, setSelected] = useState<readonly string[]>([]);
  const [order, setOrder] = useState<Order>("asc");
  const [orderBy, setOrderBy] = useState<keyof Data>("DepartureStationName");

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = journeys.items.map((j) => j.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof Data
  ) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <TableContainer sx={{ backgroundColor: "#111" }}>
          <Table sx={{ minWidth: 900 }} size={"medium"}>
            <TableHeadHome
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={journeys.items.length}
            />
            <TableBodyHome />
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
};

export default JourneyTable;
