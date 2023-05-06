import { Data, stationTableProps } from "types/station.types";
import { useState } from "react";
import { Order } from "types/general.types";
import { getComparator } from "utils/utils";
import TableHead from "components/tablehead/stations/TableHead";
import { Link } from "react-router-dom";
import Notification from "components/notifications/ListNotification";
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

const StationTable = ({
  stations,
  text,
  pending,
  error,
}: stationTableProps) => {
  const [order, setOrder] = useState<Order>("asc");
  const [orderBy, setOrderBy] = useState<keyof Data>("Nimi");
  const [selected, setSelected] = useState<readonly string[]>([]);
  const [page, setPage] = useState(0);
  const [dense, setDense] = useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(10);

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
      const newSelected = stations.map((s: { Nimi: string }) => s.Nimi);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event: React.MouseEvent<unknown>, name: string) => {
    const selectedIndex: number = selected.indexOf(name);
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
  const emptyRows: number =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - stations.length) : 0;

  if (pending) {
    return <Notification color={"green"} text={"Loading..."} />;
  }
  if (error) {
    return <Notification color={"red"} text={"ERROR!"} />;
  }

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <TableContainer>
          <Table sx={{ minWidth: 900 }} size={dense ? "small" : "medium"}>
            <TableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={stations.length}
            />

            <TableBody>
              {stations
                .filter((station) => {
                  if (text === "") {
                    return station;
                  } else if (
                    station.Nimi.toLocaleLowerCase().includes(
                      text.toLocaleLowerCase()
                    )
                  ) {
                    return station;
                  }
                  return null;
                })
                .sort(getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)

                .map((station, index) => {
                  const isItemSelected: boolean = isSelected(station.Nimi);

                  return (
                    <TableRow
                      data-testid={`station_info_row ${index + 1}`}
                      tabIndex={-1}
                      key={station.FID}
                      selected={isItemSelected}
                      onClick={(event) =>
                        handleClick(event, station.id as string)
                      }
                    >
                      <TableCell
                        data-testid={`station_name ${index + 1}`}
                        scope="row"
                        padding="none"
                        align="center"
                        sx={{
                          borderRight: "2px solid #363433",
                          fontSize: "1.3rem",
                        }}
                      >
                        <Link
                          style={{ textDecoration: "none" }}
                          to={`/stations/${station.FID}`}
                        >
                          {station.Nimi}
                        </Link>
                      </TableCell>
                      <TableCell
                        data-testid={`station_address ${index + 1}`}
                        align="center"
                        sx={{
                          borderRight: "2px solid #363433",
                          fontSize: "1.3rem",
                        }}
                      >
                        {station.Osoite}
                      </TableCell>
                      <TableCell
                        data-testid={`station_city ${index + 1}`}
                        align="center"
                        sx={{
                          borderRight: "2px solid #363433",
                          fontSize: "1.3rem",
                        }}
                      >
                        {station.Kaupunki !== ""
                          ? station.Kaupunki
                          : "Helsinki"}
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
          rowsPerPageOptions={[10, 25, 50, 100]}
          component="div"
          count={stations.length}
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

export default StationTable;
