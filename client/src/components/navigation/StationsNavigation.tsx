import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import SearchBar from "../searchbar/StationSearchBar";

const StationsNavigation = () => {
  return (
    <Box sx={{ margin: "auto", padding: "20px" }}>
      <Button>
        <Link
          style={{ textDecoration: "none", color: "#FFF", fontSize: "1.5rem" }}
          to={`/`}
        >
          HOME
        </Link>
      </Button>
      <Button>
        <Link
          style={{ textDecoration: "none", color: "#FFF", fontSize: "1.5rem" }}
          to={`/journeys`}
        >
          JOURNEYS LIST
        </Link>
      </Button>
      <SearchBar />
    </Box>
  );
};

export default StationsNavigation;
