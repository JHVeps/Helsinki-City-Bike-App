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
  if (stations.isLoading) {
    return (
      <Box>
        <Typography
          sx={{
            borderRight: "2px solid #363433",
            fontSize: "2rem",
            color: "green",
            padding: "20px",
          }}
        >
          Loading...
        </Typography>
      </Box>
    );
  }
  if (stations.error) {
    return (
      <Box>
        <Typography
          sx={{
            borderRight: "2px solid #363433",
            fontSize: "2rem",
            color: "red",
            padding: "20px",
          }}
        >
          ERROR!
        </Typography>
      </Box>
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
