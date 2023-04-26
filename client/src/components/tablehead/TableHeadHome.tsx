import { TableHead, TableRow, TableCell, Typography } from "@mui/material";
import { useAppSelector } from "redux/hooks";
import { RootState } from "redux/store";
import { EnhancedTableProps, headCells } from "types";

const TableHeadHome = (props: EnhancedTableProps) => {
  const { journeys } = useAppSelector((state: RootState) => state);

  if (journeys.isLoading) {
    return (
      <TableHead>
        <TableRow>
          <TableCell>
            <Typography
              sx={{
                borderRight: "2px solid #363433",
                fontSize: "2rem",
                color: "#fff",
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
                color: "#fff",
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
            align="center"
            sx={{
              borderRight: "2px solid #363433",
              fontSize: "1.5rem",
              color: "#fff",
            }}
            key={headCell.id}
          >
            {headCell.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default TableHeadHome;
