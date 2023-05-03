import { InfoBoardProps } from "types/station.types";
import { Box, Typography } from "@mui/material";

const InfoBoard = (props: InfoBoardProps) => {
  const { journeys, stationData } = props;

  const style = {
    bgcolor: "background.paper",
    width: "45%",
    height: "50vh",
    color: "black",
    marginRight: "20px",
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

  // Filter trips by departure station and count departure stations
  const journeysReturningFromStation = journeys.items.filter(
    (journey) => journey.DepartureStationName === stationData.Nimi
  );

  const destinationStationCounts = journeysReturningFromStation.reduce(
    (counts, journey) => {
      const destinationStation = journey.ReturnStationName;
      counts[destinationStation] = (counts[destinationStation] || 0) + 1;
      return counts;
    },
    {} as Record<string, number>
  );

  // Filter trips by return station and count return stations
  const journeysStartingFromStation = journeys.items.filter(
    (journey) => journey.ReturnStationName === stationData.Nimi
  );

  const returnStationCounts = journeysStartingFromStation.reduce(
    (counts, journey) => {
      const returnStation = journey.DepartureStationName;
      counts[returnStation] = (counts[returnStation] || 0) + 1;
      return counts;
    },
    {} as Record<string, number>
  );

  // Sort return stations by popularity and get top 5
  const sortedReturnStations = Object.entries(returnStationCounts).sort(
    ([, count1], [, count2]) => count2 - count1
  );

  const top5ReturnStations = sortedReturnStations.slice(0, 5);

  // Sort destination stations by popularity and get top 5
  const sortedDestinationStations = Object.entries(
    destinationStationCounts
  ).sort(([, count1], [, count2]) => count2 - count1);

  const top5DestinationStations = sortedDestinationStations.slice(0, 5);

  // count average journey lengths
  const arrivingJourneys = (arrivals / arrivalDivider / 1000).toFixed(1);
  const departingJourneys = (departing / departingDivider / 1000).toFixed(1);

  return (
    <Box sx={style}>
      <Typography sx={{ textAlign: "center", mt: 3 }} variant="h4">
        DETAILS
      </Typography>
      <Typography sx={{ paddingLeft: "20px", mt: 2 }} variant="h6">
        {`The average distance of a journey starting from the station: ${departingJourneys} KM`}
      </Typography>
      <Typography sx={{ paddingLeft: "20px", mt: 2 }} variant="h6">
        {`The average distance of a journey ending at the station: ${arrivingJourneys} KM`}
      </Typography>
      <Typography sx={{ paddingLeft: "20px", mt: 2 }} variant="h6">
        {`Top 5 stations for destination journeys: `}
      </Typography>
      {top5DestinationStations.map(([name, count], i) => (
        <Typography sx={{ paddingLeft: "40px" }} key={name}>
          {i + 1}. {name}: {count}
        </Typography>
      ))}
      <Typography sx={{ paddingLeft: "20px", mt: 2 }} variant="h6">
        {`Top 5 stations for arriving journeys: `}
      </Typography>
      {top5ReturnStations.map(([name, count], i) => (
        <Typography sx={{ paddingLeft: "40px" }} key={name}>{`${
          i + 1
        }. ${name}: ${count}`}</Typography>
      ))}
    </Box>
  );
};

export default InfoBoard;
