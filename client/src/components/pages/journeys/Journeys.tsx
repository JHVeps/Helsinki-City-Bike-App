import { useAppSelector } from "redux/hooks";
import { RootState } from "redux/store";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import AppBar from "components/appbar/AppBar";
import JourneyTable from "components/journey_table/JourneyTable";

import "./Journeys.css";

const Journeys = () => {
  const { journeys } = useAppSelector((state: RootState) => state);

  return (
    <div className="journey">
      <h1>Journeys</h1>
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
      <AppBar title={"Journeys List"} />
      <JourneyTable journeys={journeys} />
    </div>
  );
};

export default Journeys;
