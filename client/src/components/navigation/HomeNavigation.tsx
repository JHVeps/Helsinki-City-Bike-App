import { Button } from "@mui/material";
import { Link } from "react-router-dom";

import "./navigation.css";

const HomeNavigation = () => {
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
          to={`/journeys`}
        >
          JOURNEYS LIST
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
    </div>
  );
};

export default HomeNavigation;
