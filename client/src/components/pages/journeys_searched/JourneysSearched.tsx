import { RootState } from "redux/store";
import { useAppSelector } from "redux/hooks";
import { useParams } from "react-router-dom";
import { Journey, journeySearchedHeaders } from "types/journey.types";
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
  const title: string = `FOUND DEPARTED JOURNEYS FROM: ${stationName}`;
  const headers: journeySearchedHeaders = {
    departureStation: "Departure Station",
    returnStation: "Return Station",
    distance: "Distance traveled (KM)",
    duration: "Travel time (min)",
  };
  const notFound: string = "NOT FOUND";
  const DURATION_PER_MINUTE: number = 60;
  const DISTANCE_PER_KM: number = 1000;

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
          <Typography variant="h4">{title}</Typography>
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
                    {headers.departureStation}
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      borderRight: "2px solid #363433",
                      fontSize: "1.5rem",
                    }}
                  >
                    {headers.returnStation}
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      borderRight: "2px solid #363433",
                      fontSize: "1.5rem",
                    }}
                  >
                    {headers.distance}
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      borderRight: "2px solid #363433",
                      fontSize: "1.5rem",
                    }}
                  >
                    {headers.duration}
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
                      {(journey.CoveredDistance / DISTANCE_PER_KM).toFixed(1)}
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{
                        borderRight: "2px solid #363433",
                        fontSize: "1.3rem",
                      }}
                    >
                      {Math.round(journey.Duration / DURATION_PER_MINUTE)}
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
      <Typography variant="h2">{notFound}</Typography>
      <Navigation />
    </Box>
  );
};

export default JourneysSearched;
