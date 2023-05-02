import { InfoBoardProps } from "types/station.types";
import { Box, Typography } from "@mui/material";

const InfoBoard = (props: InfoBoardProps) => {
  const { journeys, stationData } = props;

  const style = {
    bgcolor: "background.paper",
    width: "45%",
    height: "40vh",
    color: "black",
    marginRight: "20px",
    textAlign: "center",
  };

  let departing = 0;
  let departingDivider = 0;
  let arrivals = 0;
  let arrivalDivider = 0;

  for (const obj of journeys.items) {
    if (obj.DepartureStationName === stationData.Nimi) {
      departing += obj.CoveredDistance;
      departingDivider++;
    }
    if (obj.ReturnStationName === stationData.Nimi) {
      arrivals += obj.CoveredDistance;
      arrivalDivider++;
    }
  }

  console.log("journeys: ", journeys.items);

  console.log("Departing: ", departing);

  console.log("Arriving: ", arrivals);

  return (
    <Box sx={style}>
      <Typography sx={{ mt: 3 }} variant="h4">
        DETAILS
      </Typography>
      <Typography sx={{ mt: 3 }} variant="h6">
        {`The average distance of a journey starting from the station: ${(
          departing /
          departingDivider /
          1000
        ).toFixed(1)} KM`}
      </Typography>
      <Typography sx={{ mt: 3 }} variant="h6">
        {`The average distance of a journey ending at the station: ${(
          arrivals /
          arrivalDivider /
          1000
        ).toFixed(1)} KM`}
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
