import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import SearchBar from "../searchbar/StationSearchBar";

import "./navigation.css";

const StationsNavigation = () => {
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
      <SearchBar />
    </div>
  );
};

export default StationsNavigation;
