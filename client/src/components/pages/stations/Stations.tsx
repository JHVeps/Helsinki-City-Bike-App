import { useState } from "react";
import { useAppSelector } from "redux/hooks";
import { RootState } from "redux/store";
import { Box, Typography } from "@mui/material";
import Navigation from "../../navigation/StationsNavigation";
import AppBar from "components/appbar/AppBar";
import StationTable from "components/station_table/StationTable";
import { StationsListPageProps } from "types/station.types";

const Stations = ({ title }: StationsListPageProps) => {
  const { stations } = useAppSelector((state: RootState) => state);
  const stationsPageTitle: string = title;
  const [text, setText] = useState("");
  return (
    <Box sx={{ padding: "100px" }}>
      <Typography sx={{ padding: "20px" }} variant="h4">
        {stationsPageTitle}
      </Typography>
      <Navigation />
      <AppBar title={"Stations List"} text={text} setText={setText} />
      <StationTable
        stations={stations.items}
        text={text}
        pending={stations.isLoading}
        error={stations.error}
      />
    </Box>
  );
};

export default Stations;
