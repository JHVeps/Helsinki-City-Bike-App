import { useAppSelector } from "redux/hooks";
import { RootState } from "redux/store";
import { Link, useParams } from "react-router-dom";
import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const Station = () => {
  const { stations, journeys } = useAppSelector((state: RootState) => state);
  const { FID } = useParams<{ FID: string }>();

  if (FID) {
    const stationData = stations.items.find((s) => s.FID === parseInt(FID));

    if (stationData) {
      let departures = 0;

      for (const obj of journeys.items) {
        if (obj.DepartureStationId === stationData.ID) {
          departures++;
        }
      }

      let arrives = 0;

      for (const obj of journeys.items) {
        if (obj.ReturnStationId === stationData.ID) {
          arrives++;
        }
      }

      return (
        <div>
          <h1>Station info</h1>
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
                    {arrives}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <Button>
            <Link style={{ textDecoration: "none", color: "#FFF" }} to={`/`}>
              HOME
            </Link>
          </Button>
          <Button>
            <Link
              style={{ textDecoration: "none", color: "#FFF" }}
              to={`/journeys`}
            >
              JOURNEYS LIST
            </Link>
          </Button>
          <Button>
            <Link
              style={{ textDecoration: "none", color: "#FFF" }}
              to={`/stations`}
            >
              STATIONS LIST
            </Link>
          </Button>
        </div>
      );
    }
  }
  return (
    <div>
      <h1>NOT FOUND</h1>
      <Button>
        <Link style={{ textDecoration: "none", color: "#FFF" }} to={`/`}>
          HOME
        </Link>
      </Button>
      <Button>
        <Link
          style={{ textDecoration: "none", color: "#FFF" }}
          to={`/journeys`}
        >
          JOURNEYS LIST
        </Link>
      </Button>
      <Button>
        <Link
          style={{ textDecoration: "none", color: "#FFF" }}
          to={`/stations`}
        >
          STATIONS LIST
        </Link>
      </Button>
    </div>
  );
};
export default Station;
