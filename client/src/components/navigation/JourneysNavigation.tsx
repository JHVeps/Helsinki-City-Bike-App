import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import JourneySearchBar from "components/searchbar/JourneySearchBar";

const JourneysNavigation = () => {
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
          to={`/stations`}
        >
          STATIONS LIST
        </Link>
      </Button>
      <JourneySearchBar />
    </Box>
  );
};

export default JourneysNavigation;
