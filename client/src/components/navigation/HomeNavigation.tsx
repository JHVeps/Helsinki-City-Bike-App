import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";

const HomeNavigation = () => {
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
      <Button>
        <Link
          style={{ textDecoration: "none", color: "#FFF", fontSize: "1.5rem" }}
          to={`/stations`}
        >
          STATIONS LIST
        </Link>
      </Button>
    </Box>
  );
};

export default HomeNavigation;
