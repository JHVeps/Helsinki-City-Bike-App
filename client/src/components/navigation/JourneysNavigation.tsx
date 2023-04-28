import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import JourneySearchBar from "components/searchbar/JourneySearchBar";

import "./JourneysNavigation.css";

const JourneysNavigation = () => {
  return (
    <div className="navbar">
      <Button>
        <Link style={{ textDecoration: "none", color: "#FFF" }} to={`/`}>
          HOME
        </Link>
      </Button>
      <Button>
        <Link
          style={{ textDecoration: "none", color: "#FFF" }}
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
