import { useState } from "react";
import { useAppSelector } from "redux/hooks";
import { RootState } from "redux/store";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import AppBar from "components/appbar/AppBar";
import StationTable from "components/station_table/StationTable";

import "./Stations.css";

const Stations = () => {
  const { stations } = useAppSelector((state: RootState) => state);
  const [text, setText] = useState("");

  return (
    <div className="station">
      <h1>Stations</h1>
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
      <AppBar title={"Stations List"} text={text} setText={setText} />
      <StationTable stations={stations} />
    </div>
  );
};

export default Stations;
