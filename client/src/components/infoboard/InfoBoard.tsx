import { InfoBoardProps } from "types/station.types";
import { Box, Typography } from "@mui/material";

const InfoBoard = (props: InfoBoardProps) => {
  const { journeys, stationData } = props;

  const style = {
    bgcolor: "background.paper",
    width: "50%",
    height: "40vh",
    color: "black",
    "margin-right": "20px",
    textAlign: "center",
  };

  let departing = [];
  let arriving = [];

  return (
    <Box sx={style}>
      <Typography variant="h4">DETAILS</Typography>
      <Typography sx={{ mt: 3 }} variant="h6">
        {`Average departing journey length: `}
      </Typography>
      <Typography sx={{ mt: 3 }} variant="h6">
        {`Average returning journey length: `}
      </Typography>
      <Typography sx={{ mt: 3 }} variant="h6">
        {`Top 5 stations for departing journeys: `}
      </Typography>
      <Typography sx={{ mt: 3 }} variant="h6">
        {`Top 5 stations for arriving journeys: `}
      </Typography>
    </Box>
  );
};

export default InfoBoard;
