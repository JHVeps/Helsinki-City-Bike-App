import { useAppSelector } from "redux/hooks";
import { RootState } from "redux/store";
import { useParams } from "react-router-dom";
import { stationSearchedHeaders } from "types/station.types";
import Navigation from "../../navigation/HomeNavigation";
import InfoBoard from "components/infoboard/InfoBoard";
import Map from "../../google-map/GoogleMap";
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

const StationSearched = () => {
  const { stations, journeys } = useAppSelector((state: RootState) => state);
  const { stationName } = useParams<{ stationName: string }>();
  const title: string = "STATION INFO";
  const headers: stationSearchedHeaders = {
    name: "Name",
    address: "Address",
    departures: "Journeys departing",
    arrivals: "Journeys arriving",
  };

  if (stationName) {
    const stationData = stations.items.find((s) => s.Nimi === stationName);

    if (stationData) {
      let departures: number = 0;
      let arrivals: number = 0;

      for (const obj of journeys.items) {
        if (obj.DepartureStationId === stationData.ID) {
          departures++;
        }
        if (obj.ReturnStationId === stationData.ID) {
          arrivals++;
        }
      }

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
                    {headers.name}
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      borderRight: "2px solid #363433",
                      fontSize: "1.5rem",
                    }}
                  >
                    {headers.address}
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      borderRight: "2px solid #363433",
                      fontSize: "1.5rem",
                    }}
                  >
                    {headers.departures}
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      borderRight: "2px solid #363433",
                      fontSize: "1.5rem",
                    }}
                  >
                    {headers.arrivals}
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

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              padding: "20px",
              marginBlock: "20px",
            }}
          >
            <InfoBoard
              journeys={journeys.items}
              stationData={stationData}
              title={"DETAILED INFORMATION"}
            />
            <Map lat={stationData.y} lng={stationData.x} />
          </Box>
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
export default StationSearched;
