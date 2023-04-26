import { useEffect } from "react";
import {
  TableContainer,
  Paper,
  Table,
  TableRow,
  TableCell,
  TableBody,
  Box,
  TableHead,
} from "@mui/material";
import { getAllJourneys } from "services/journey.services";
import JourneyAppBar from "components/appbar/JourneyAppBar";
import { headCells } from "types";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { RootState } from "redux/store";

import "./Home.css";

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
        <JourneyAppBar />
        <Box sx={{ width: "100%" }}>
          <Paper sx={{ width: "100%", mb: 2 }}>
            <TableContainer sx={{ backgroundColor: "#111" }}>
              <Table sx={{ minWidth: 750 }} size={"medium"}>
                <TableHead>
                  <TableRow>
                    {headCells.map((headCell) => (
                      <TableCell
                        align="center"
                        sx={{
                          borderRight: "2px solid #363433",
                          fontSize: "1.3rem",
                          color: "#fff",
                        }}
                        key={headCell.id}
                      >
                        {headCell.label}
                      </TableCell>
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
                          align="center"
                          sx={{
                            borderRight: "2px solid #363433",
                            fontSize: "1.3rem",
                            color: "#fff",
                          }}
                        >
                          {journey.DepartureStationName}
                        </TableCell>
                        <TableCell
                          align="center"
                          sx={{
                            borderRight: "2px solid #363433",
                            fontSize: "1.3rem",
                            color: "#fff",
                          }}
                        >
                          {journey.ReturnStationName}
                        </TableCell>
                        <TableCell
                          align="center"
                          sx={{
                            borderRight: "2px solid #363433",
                            fontSize: "1.3rem",
                            color: "#fff",
                          }}
                        >
                          {journey.CoveredDistance}
                        </TableCell>
                        <TableCell
                          align="center"
                          sx={{
                            borderRight: "2px solid #363433",
                            fontSize: "1.3rem",
                            color: "#fff",
                          }}
                        >
                          {journey.Duration}
                        </TableCell>
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
