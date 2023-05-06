import { TableHead, TableRow, TableCell, TableSortLabel } from "@mui/material";
import {
  Data,
  StationEnhancedTableProps,
  stationsListHeadCells,
} from "types/station.types";

const StationTableHead = ({
  order,
  orderBy,
  onRequestSort,
}: StationEnhancedTableProps) => {
  const createSortHandler =
    (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };
  return (
    <TableHead>
      <TableRow>
        {stationsListHeadCells.map((headCell, index) => (
          <TableCell
            data-testid={`station_table_header ${index + 1}`}
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
                <>{order === "desc" ? ": sorted desc" : ": sorted asc"}</>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default StationTableHead;
