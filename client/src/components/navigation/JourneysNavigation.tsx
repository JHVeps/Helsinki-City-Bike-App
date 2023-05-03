import { Box } from "@mui/material";
import LinkButton from "components/buttons/LinkButton";
import JourneySearchBar from "components/searchbar/JourneySearchBar";

const JourneysNavigation = () => {
  return (
    <Box sx={{ margin: "auto", padding: "20px" }}>
      <LinkButton
        textDecoration="none"
        color="#FFF"
        fontSize="1.5rem"
        path="/"
        title="HOME"
      />
      <LinkButton
        textDecoration="none"
        color="#FFF"
        fontSize="1.5rem"
        path="/stations"
        title="STATIONS LIST"
      />
      <JourneySearchBar />
    </Box>
  );
};

export default JourneysNavigation;
