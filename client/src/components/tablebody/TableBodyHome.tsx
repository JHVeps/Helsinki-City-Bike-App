import { TableBody, TableRow, TableCell } from "@mui/material";
import { useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/store";

const TableBodyHome = () => {
  const { journeys } = useAppSelector((state: RootState) => state);
  return (
    <TableBody>
      {journeys.items.map((journey, index) => {
        const labelId = `enhanced-table-checkbox-${index}`;
        return (
          <TableRow hover role="checkbox" tabIndex={-1} key={journey.id}>
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
              {(journey.CoveredDistance / 1000).toFixed(1)}
            </TableCell>
            <TableCell
              align="center"
              sx={{
                borderRight: "2px solid #363433",
                fontSize: "1.3rem",
                color: "#fff",
              }}
            >
              {Math.round(journey.Duration / 60)}
            </TableCell>
          </TableRow>
        );
      })}
    </TableBody>
  );
};

export default TableBodyHome;
