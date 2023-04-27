import { useAppSelector } from "redux/hooks";
import { RootState } from "redux/store";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import AppBar from "components/appbar/AppBar";

import "./Stations.css";

const Stations = () => {
  const { stations } = useAppSelector((state: RootState) => state);

  console.log("stations state: ", stations);
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
      <AppBar title={"Stations List"} />
    </div>
  );
};

export default Stations;
