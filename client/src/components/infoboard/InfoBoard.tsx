import { InfoBoardProps } from "types/station.types";
import { Box, Typography } from "@mui/material";

const InfoBoard = (props: InfoBoardProps) => {
  const { journeys, stationData } = props;

  const style = {
    bgcolor: "background.paper",
    width: "50%",
    height: "40vh",
    color: "black",
    marginRight: "20px",
    textAlign: "center",
  };

  let departing = [];
  let arriving = [];

  for (const obj of journeys.items) {
    if (obj.DepartureStationName === stationData.Nimi) {
      departing.push(obj);
    }
    if (obj.ReturnStationId === stationData.ID) {
      arriving.push(obj);
    }
  }

  console.log("journeys: ", journeys.items);

  console.log("Departing: ", departing);

  console.log("Arriving: ", arriving);

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
