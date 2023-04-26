import {
  TableHead,
  TableRow,
  TableCell,
  Typography,
  Box,
  TableSortLabel,
} from "@mui/material";
import { useAppSelector } from "redux/hooks";
import { RootState } from "redux/store";
import { Data, EnhancedTableProps, headCells } from "types";

const TableHeadHome = (props: EnhancedTableProps) => {
  const { journeys } = useAppSelector((state: RootState) => state);
  const { order, orderBy, onRequestSort } = props;

  const createSortHandler =
    (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };

  if (journeys.isLoading) {
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
  if (journeys.error) {
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
        {headCells.map((headCell) => (
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

export default TableHeadHome;
