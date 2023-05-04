import { InfoBoardProps } from "types/station.types";
import { Box, Typography } from "@mui/material";

const InfoBoard = ({ journeys, stationData }: InfoBoardProps) => {
  const style = {
    bgcolor: "background.paper",
    width: "45%",
    height: "50vh",
    color: "black",
    marginRight: "20px",
  };

  const distancePerKm = 1000;

  let distances = {
    departing: { total: 0, count: 0 },
    arrivals: { total: 0, count: 0 },
  };

  journeys.items.forEach((obj) => {
    if (obj.DepartureStationName === stationData.Nimi) {
      distances.departing.total += obj.CoveredDistance;
      distances.departing.count++;
    }
    if (obj.ReturnStationName === stationData.Nimi) {
      distances.arrivals.total += obj.CoveredDistance;
      distances.arrivals.count++;
    }
  });

  const totalArrivals: number = distances.arrivals.total;
  const arrivalsDivider: number = distances.arrivals.count;
  const totalDepartures: number = distances.departing.total;
  const departuresDivider: number = distances.departing.count;

  // count average journey lengths
  const averageArrivingDistance: string = `${(
    totalArrivals /
    (arrivalsDivider * distancePerKm)
  ).toFixed(1)} km`;
  const averageDepartingDistance: string = `${(
    totalDepartures /
    (departuresDivider * distancePerKm)
  ).toFixed(1)} km`;

  interface StationCount {
    station: string;
    count: number;
  }

  const journeysReturningFromStation = journeys?.items?.filter(
    ({ DepartureStationName }) => DepartureStationName === stationData?.Nimi
  );

  const journeysStartingFromStation = journeys?.items?.filter(
    ({ ReturnStationName }) => ReturnStationName === stationData?.Nimi
  );

  const destinationStationCounts = journeysReturningFromStation?.reduce(
    (counts, { ReturnStationName }) => {
      counts[ReturnStationName] = (counts[ReturnStationName] || 0) + 1;
      return counts;
    },
    {} as Record<string, number>
  );

  const returnStationCounts = journeysStartingFromStation?.reduce(
    (counts, { DepartureStationName }) => {
      counts[DepartureStationName] = (counts[DepartureStationName] || 0) + 1;
      return counts;
    },
    {} as Record<string, number>
  );

  const sortedReturnStations = Object.entries(returnStationCounts || {}).sort(
    ([, count1], [, count2]) => count2 - count1
  );

  const top5ReturnStations: StationCount[] = sortedReturnStations
    .slice(0, 5)
    .map(([station, count]) => ({ station, count }));

  const sortedDestinationStations = Object.entries(
    destinationStationCounts || {}
  ).sort(([, count1], [, count2]) => count2 - count1);

  const top5DestinationStations: StationCount[] = sortedDestinationStations
    .slice(0, 5)
    .map(([station, count]) => ({ station, count }));

  return (
    <Box sx={style}>
      <Typography sx={{ textAlign: "center", mt: 3 }} variant="h4">
        DETAILS
      </Typography>
      <Typography sx={{ paddingLeft: "20px", mt: 2 }} variant="h6">
        {`The average distance of a journey starting from the station: ${averageDepartingDistance} KM`}
      </Typography>
      <Typography sx={{ paddingLeft: "20px", mt: 2 }} variant="h6">
        {`The average distance of a journey ending at the station: ${averageArrivingDistance} KM`}
      </Typography>
      <Typography sx={{ paddingLeft: "20px", mt: 2 }} variant="h6">
        {`Top 5 stations for destination journeys: `}
      </Typography>
      {top5DestinationStations.map(({ station, count }, i) => (
        <Typography sx={{ paddingLeft: "40px" }} key={station}>
          {i + 1}. {station}: {count}
        </Typography>
      ))}
      <Typography sx={{ paddingLeft: "20px", mt: 2 }} variant="h6">
        {`Top 5 stations for arriving journeys: `}
      </Typography>
      {top5ReturnStations.map(({ station, count }, i) => (
        <Typography sx={{ paddingLeft: "40px" }} key={station}>
          {i + 1}. {station}: {count}
        </Typography>
      ))}
    </Box>
  );
};

export default InfoBoard;
