import { Box } from "@mui/material";
import LinkButton from "components/buttons/LinkButton";
import SearchBar from "../searchbar/SearchBar";

const StationsNavigation = () => {
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
        path="/journeys"
        title="JOURNEYS LIST"
      />
      <LinkButton
        textDecoration="none"
        color="#FFF"
        fontSize="1.5rem"
        path="/stations/add_new_station"
        title="ADD NEW STATION"
      />
      <SearchBar url={"/stations/search/"} buttonTitle="SEARCH" />
    </Box>
  );
};

export default StationsNavigation;
