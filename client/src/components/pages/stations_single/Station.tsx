import { useAppSelector } from "redux/hooks";
import { RootState } from "redux/store";
import { useParams } from "react-router-dom";
import Navigation from "../../navigation/HomeNavigation";
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
import Map from "components/google-map/GoogleMap";
import InfoBoard from "components/infoboard/InfoBoard";

const Station = () => {
  const { stations, journeys } = useAppSelector((state: RootState) => state);
  const { FID } = useParams<{ FID: string }>();

  if (FID) {
    const stationData = stations.items.find((s) => s.FID === parseInt(FID));

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
        <Box sx={{ padding: "20px", marginBlock: "20px" }}>
          <Typography variant="h4">STATION INFO</Typography>
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
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              padding: "20px",
              marginBlock: "20px",
            }}
          >
            <InfoBoard
              journeys={journeys}
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
export default Station;
