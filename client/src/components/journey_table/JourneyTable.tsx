import { useState } from "react";
import { Data, Order, journeyTableProps } from "types";
import { getComparator } from "utils/utils";
import TableHeadHome from "components/tablehead/TableHeadHome";
import {
  Box,
  Paper,
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
  TablePagination,
  FormControlLabel,
  Switch,
} from "@mui/material";

const JourneyTable = (props: journeyTableProps) => {
  const { journeys } = props;
  const [order, setOrder] = useState<Order>("asc");
  const [orderBy, setOrderBy] = useState<keyof Data>("DepartureStationName");
  const [selected, setSelected] = useState<readonly string[]>([]);
  const [page, setPage] = useState(0);
  const [dense, setDense] = useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof Data
  ) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = journeys.items.map(
        (j: { DepartureStationName: any }) => j.DepartureStationName
      );
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event: React.MouseEvent<unknown>, name: string) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected: readonly string[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDense(event.target.checked);
  };

  const isSelected = (name: string) => selected.indexOf(name) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0
      ? Math.max(0, (1 + page) * rowsPerPage - journeys.items.length)
      : 0;

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <TableContainer>
          <Table sx={{ minWidth: 900 }} size={dense ? "small" : "medium"}>
            <TableHeadHome
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={journeys.items.length}
              journeys={journeys}
            />

            <TableBody>
              {journeys.items
                .slice()
                .sort(getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)

                .map((journey, index) => {
                  const isItemSelected = isSelected(
                    journey.DepartureStationName
                  );
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={journey.id}
                      selected={isItemSelected}
                      onClick={(event) =>
                        handleClick(event, journey.id as string)
                      }
                    >
                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="none"
                        align="center"
                        sx={{
                          borderRight: "2px solid #363433",
                          fontSize: "1.3rem",
                        }}
                      >
                        {journey.DepartureStationName}
                      </TableCell>
                      <TableCell
                        align="center"
                        sx={{
                          borderRight: "2px solid #363433",
                          fontSize: "1.3rem",
                        }}
                      >
                        {journey.ReturnStationName}
                      </TableCell>
                      <TableCell
                        align="center"
                        sx={{
                          borderRight: "2px solid #363433",
                          fontSize: "1.3rem",
                        }}
                      >
                        {(journey.CoveredDistance / 1000).toFixed(1)}
                      </TableCell>
                      <TableCell
                        align="center"
                        sx={{
                          borderRight: "2px solid #363433",
                          fontSize: "1.3rem",
                        }}
                      >
                        {Math.round(journey.Duration / 60)}
                      </TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25, 50, 100]}
          component="div"
          count={journeys.items.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      <FormControlLabel
        control={
          <Switch checked={dense} onChange={handleChangeDense} color="error" />
        }
        label="Dense padding"
      />
    </Box>
  );
};

export default JourneyTable;
