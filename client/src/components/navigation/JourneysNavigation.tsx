import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import JourneySearchBar from "components/searchbar/JourneySearchBar";

import "./navigation.css";

const JourneysNavigation = () => {
  return (
    <div className="navbar">
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
    </div>
  );
};

export default JourneysNavigation;
