import { Button } from "@mui/material";
import { Link } from "react-router-dom";

import "./navigation.css";

const HomeNavigation = () => {
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
    </div>
  );
};

export default HomeNavigation;
