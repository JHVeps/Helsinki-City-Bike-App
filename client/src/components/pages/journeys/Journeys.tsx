import { useState } from "react";
import { useAppSelector } from "redux/hooks";
import { RootState } from "redux/store";
import Navigation from "components/navigation/JourneysNavigation";
import AppBar from "components/appbar/AppBar";
import JourneyTable from "components/journey_table/JourneyTable";
import { Box, Typography } from "@mui/material";

const Journeys = () => {
  const { journeys } = useAppSelector((state: RootState) => state);
  const [text, setText] = useState("");

  return (
    <Box>
      <Typography variant="h4">JOURNEYS</Typography>
      <Navigation />
      <AppBar title={"Journeys List"} text={text} setText={setText} />
      <JourneyTable journeys={journeys.items} text={text} />
    </Box>
  );
};

export default Journeys;
