import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { RootState } from "../../../../redux/store";
import {
  TableContainer,
  Paper,
  Table,
  TableRow,
  TableCell,
  TableBody,
  Box,
  AppBar,
  Toolbar,
  TableHead,
  Typography,
} from "@mui/material";
import { getAllJourneys } from "services/journey.services";

import "./Home.css";

export interface Data {
  DepartureStationName: string;
  ReturnStationName: string;
  CoveredDistance: number;
  Duration: number;
}

export interface HeadCell {
  disablePadding: boolean;
  id: keyof Data;
  label: string;
  numeric: boolean;
}

export const headCells: readonly HeadCell[] = [
  {
    id: "DepartureStationName",
    numeric: false,
    disablePadding: false,
    label: "Departure Station",
  },
  {
    id: "ReturnStationName",
    numeric: false,
    disablePadding: false,
    label: "Return Station",
  },
  {
    id: "CoveredDistance",
    numeric: true,
    disablePadding: false,
    label: "Distance traveled (km)",
  },
  {
    id: "Duration",
    numeric: true,
    disablePadding: false,
    label: "Travel time (min)",
  },
];

const Home = () => {
  const dispatch = useAppDispatch();
  const { journeys } = useAppSelector((state: RootState) => state);

  useEffect(() => {
    dispatch(getAllJourneys());
  }, [dispatch]);

  console.log("headcells: ", headCells);
  return (
    <div className="home">
      <h1>Home</h1>
      <>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar
            position="static"
            style={{ background: "#111", textAlign: "center" }}
          >
            <Toolbar>
              <Typography variant="h4">Journeys</Typography>
            </Toolbar>
          </AppBar>
        </Box>
        <Box sx={{ width: "100%" }}>
          <Paper sx={{ width: "100%", mb: 2 }}>
            <TableContainer>
              <Table sx={{ minWidth: 750 }} size={"medium"}>
                <TableHead>
                  <TableRow>
                    {headCells.map((headCell) => (
                      <TableCell key={headCell.id}>{headCell.label}</TableCell>
                    ))}
                  </TableRow>
                </TableHead>

                <TableBody>
                  {journeys.items.map((journey, index) => {
                    const labelId = `enhanced-table-checkbox-${index}`;

                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={journey.id}
                      >
                        <TableCell
                          component="th"
                          id={labelId}
                          scope="row"
                          padding="none"
                        >
                          {journey.DepartureStationName}
                        </TableCell>
                        <TableCell>{journey.ReturnStationName}</TableCell>
                        <TableCell>{journey.CoveredDistance}</TableCell>
                        <TableCell>{journey.Duration}</TableCell>
                        <TableCell align="right"></TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Box>
      </>
    </div>
  );
};

export default Home;
