import { tableHeadNotificationProps } from "types/general.types";
import { Box, CircularProgress, Typography } from "@mui/material";

const TableHeadNotification = ({ color, text }: tableHeadNotificationProps) => {
  return (
    <Box sx={{ textAlign: "center" }}>
      <Typography
        data-testid="notification_txt"
        variant="h2"
        sx={{
          color: { color },
          paddingTop: "50px",
        }}
      >
        {text}
      </Typography>
      <CircularProgress
        sx={{
          color: "inherit",
        }}
      />
    </Box>
  );
};

export default TableHeadNotification;
