import { TableHead, TableRow, TableCell, TableSortLabel } from "@mui/material";
import TableHeadNotification from "components/notifications/JourneyListNotification";
import {
  Data,
  StationEnhancedTableProps,
  stationsListHeadCells,
} from "types/station.types";

const StationTableHead = ({
  order,
  orderBy,
  onRequestSort,
  stations,
}: StationEnhancedTableProps) => {
  const createSortHandler =
    (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };
  if (stations.isLoading) {
    return <TableHeadNotification color={"green"} text={"Loading..."} />;
  }
  if (stations.error) {
    return <TableHeadNotification color={"red"} text={"ERROR!"} />;
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
