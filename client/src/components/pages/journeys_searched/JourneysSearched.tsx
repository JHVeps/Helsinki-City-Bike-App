import { RootState } from "redux/store";
import { useAppSelector } from "redux/hooks";
import { useParams } from "react-router-dom";
import { Journey } from "types/journey.types";
import Navigation from "components/navigation/HomeNavigation";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

const JourneysSearched = () => {
  const { journeys } = useAppSelector((state: RootState) => state);
  const { stationName } = useParams<{ stationName: string }>();

  if (stationName) {
    const foundJourneys = [] as Journey[];

    for (const obj of journeys.items) {
      if (obj.DepartureStationName === stationName) {
        foundJourneys.push(obj);
      }
    }

    if (foundJourneys.length > 0) {
      return (
        <Box sx={{ padding: "20px", marginBlock: "20px" }}>
          <Typography variant="h4">{`FOUND DEPARTED JOURNEYS FROM: ${stationName}`}</Typography>
          <Navigation />
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }}>
              <TableHead>
                <TableRow>
                  <TableCell
                    align="center"
                    sx={{
                      borderRight: "2px solid #363433",
                      fontSize: "1.5rem",
                    }}
                  >
                    Departure Station
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      borderRight: "2px solid #363433",
                      fontSize: "1.5rem",
                    }}
                  >
                    Return Station
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      borderRight: "2px solid #363433",
                      fontSize: "1.5rem",
                    }}
                  >
                    Distance traveled (KM)
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      borderRight: "2px solid #363433",
                      fontSize: "1.5rem",
                    }}
                  >
                    Travel time (min)
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {foundJourneys.map((journey) => (
                  <TableRow key={journey.id}>
                    <TableCell
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
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      );
    }
  }
  return (
    <Box>
      <Typography variant="h2">NOT FOUND</Typography>
      <Navigation />
    </Box>
  );
};

export default JourneysSearched;
