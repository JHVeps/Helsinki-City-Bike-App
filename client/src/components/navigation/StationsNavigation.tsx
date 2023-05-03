import { Box } from "@mui/material";
import LinkButton from "components/buttons/LinkButton";
import SearchBar from "../searchbar/StationSearchBar";

const StationsNavigation = () => {
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
        path="/journeys"
        title="JOURNEYS LIST"
      />
      <SearchBar />
    </Box>
  );
};

export default StationsNavigation;
