import { useState } from "react";
import { useAppSelector } from "redux/hooks";
import { RootState } from "redux/store";
import { Box, Typography } from "@mui/material";
import Navigation from "../../navigation/StationsNavigation";
import AppBar from "components/appbar/AppBar";
import StationTable from "components/station_table/StationTable";

const Stations = () => {
  const { stations } = useAppSelector((state: RootState) => state);
  const [text, setText] = useState("");
  return (
    <Box>
      <Typography variant="h4">Stations</Typography>
      <Navigation />
      <AppBar title={"Stations List"} text={text} setText={setText} />
      <StationTable stations={stations} />
    </Box>
  );
};

export default Stations;
