import { Box, Typography } from "@mui/material";
import { InfoBoardProps } from "types/station.types";

const InfoBoard = (props: InfoBoardProps) => {
  const { journeys, stationName } = props;

  const style = {
    bgcolor: "background.paper",
    width: "50%",
    height: "40vh",
    color: "black",
    "margin-right": "20px",
    textAlign: "center",
  };
  return (
    <Box sx={style}>
      <Typography variant="h4" component="h2">
        DETAILS
      </Typography>
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
