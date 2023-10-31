import { Box } from "@mui/material";
import LinkButton from "components/buttons/LinkButton";
import SearchBar from "components/searchbar/SearchBar";

const JourneysNavigation = () => {
  return (
    <Box sx={{ margin: "auto", padding: "20px" }}>
      <LinkButton
        textDecoration="none"
        color="#FFF"
        fontSize="1.5rem"
        path="/signup"
        title="SIGNUP"
      />
      <LinkButton
        textDecoration="none"
        color="#FFF"
        fontSize="1.5rem"
        path="/home"
        title="HOME"
      />
      <LinkButton
        textDecoration="none"
        color="#FFF"
        fontSize="1.5rem"
        path="/stations"
        title="STATIONS LIST"
      />
      <SearchBar url={"/journeys/search/"} buttonTitle="SEARCH" />
    </Box>
  );
};

export default JourneysNavigation;
