import {
  TableHead,
  TableRow,
  TableCell,
  Typography,
  TableSortLabel,
  Box,
} from "@mui/material";
import {
  Data,
  StationEnhancedTableProps,
  stationsListHeadCells,
} from "types/station.types";

const StationTableHead = (props: StationEnhancedTableProps) => {
  const { order, orderBy, onRequestSort, stations } = props;

  const createSortHandler =
    (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };
  // Destructure to notification components
  if (stations.isLoading) {
    return (
      <TableHead>
        <TableRow>
          <TableCell>
            <Typography
              sx={{
                borderRight: "2px solid #363433",
                fontSize: "2rem",
              }}
            >
              Loading...
            </Typography>
          </TableCell>
        </TableRow>
      </TableHead>
    );
  }
  if (stations.error) {
    return (
      <TableHead>
        <TableRow>
          <TableCell>
            <Typography
              sx={{
                borderRight: "2px solid #363433",
                fontSize: "2rem",
              }}
            >
              ERROR
            </Typography>
          </TableCell>
        </TableRow>
      </TableHead>
    );
  }

  return (
    <TableHead>
      <TableRow>
        {stationsListHeadCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align="center"
            sx={{
              borderRight: "2px solid #363433",
              fontSize: "1.5rem",
            }}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span">
                  {order === "desc" ? ": sorted desc" : ": sorted asc"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default StationTableHead;
