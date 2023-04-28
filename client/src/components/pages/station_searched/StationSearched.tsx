import { useAppSelector } from "redux/hooks";
import { RootState } from "redux/store";
import { useParams } from "react-router-dom";
import Navigation from "../../navigation/HomeNavigation";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const StationSearched = () => {
  const { stations, journeys } = useAppSelector((state: RootState) => state);
  const { stationName } = useParams<{ stationName: string }>();

  if (stationName) {
    const stationData = stations.items.find((s) => s.Nimi === stationName);

    if (stationData) {
      let departures = 0;
      let arrivals = 0;

      for (const obj of journeys.items) {
        if (obj.DepartureStationId === stationData.ID) {
          departures++;
        }
        if (obj.ReturnStationId === stationData.ID) {
          arrivals++;
        }
      }

      return (
        <div>
          <h1>Station info</h1>
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
                    Name
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      borderRight: "2px solid #363433",
                      fontSize: "1.5rem",
                    }}
                  >
                    Address
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      borderRight: "2px solid #363433",
                      fontSize: "1.5rem",
                    }}
                  >
                    Journeys departing
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      borderRight: "2px solid #363433",
                      fontSize: "1.5rem",
                    }}
                  >
                    Journeys arriving
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell
                    align="center"
                    sx={{
                      borderRight: "2px solid #363433",
                      fontSize: "1.3rem",
                    }}
                  >
                    {stationData.Nimi}
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      borderRight: "2px solid #363433",
                      fontSize: "1.3rem",
                    }}
                  >
                    {stationData.Osoite}
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      borderRight: "2px solid #363433",
                      fontSize: "1.3rem",
                    }}
                  >
                    {departures}
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      borderRight: "2px solid #363433",
                      fontSize: "1.3rem",
                    }}
                  >
                    {arrivals}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      );
    }
  }
  return (
    <div>
      <h1>NOT FOUND</h1>
      <Navigation />
    </div>
  );
};
export default StationSearched;
