import { TableHead, TableRow, TableCell } from "@mui/material";
import { headCells } from "types";

const TableHeadHome = () => {
  return (
    <>
      <TableHead>
        <TableRow>
          {headCells.map((headCell) => (
            <TableCell
              align="center"
              sx={{
                borderRight: "2px solid #363433",
                fontSize: "1.3rem",
                color: "#fff",
              }}
              key={headCell.id}
            >
              {headCell.label}
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    </>
  );
};

export default TableHeadHome;
