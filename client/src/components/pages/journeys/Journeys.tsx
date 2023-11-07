import { journeysListPageProps } from "types/journey.types";
import { useState } from "react";
import { useAppSelector } from "redux/hooks";
import { RootState } from "redux/store";
import AppBar from "components/appbar/AppBar";
import JourneyTable from "components/journey_table/JourneyTable";
import { Box, Typography } from "@mui/material";

const Journeys = ({ title }: journeysListPageProps) => {
  const { journeys } = useAppSelector((state: RootState) => state);
  const [text, setText] = useState("");
  const journeysPageTitle: string = title;

  return (
    <Box sx={{ padding: "100px" }}>
      <Typography sx={{ padding: "20px" }} variant="h4">
        {journeysPageTitle}
      </Typography>
      <AppBar title={"Journeys List"} text={text} setText={setText} />
      <JourneyTable
        journeys={journeys.items}
        text={text}
        pending={journeys.isLoading}
        error={journeys.error}
      />
    </Box>
  );
};

export default Journeys;
