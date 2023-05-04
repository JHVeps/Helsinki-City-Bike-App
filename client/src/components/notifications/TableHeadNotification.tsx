import { tableHeadNotificationProps } from "types/general.types";
import { TableHead, TableRow, TableCell, Typography } from "@mui/material";

const TableHeadNotification = ({ color, text }: tableHeadNotificationProps) => {
  return (
    <TableHead>
      <TableRow>
        <TableCell>
          <Typography
            sx={{
              borderRight: "2px solid #363433",
              fontSize: "2rem",
              color: { color },
              padding: "20px",
            }}
          >
            {text}
          </Typography>
        </TableCell>
      </TableRow>
    </TableHead>
  );
};

export default TableHeadNotification;
