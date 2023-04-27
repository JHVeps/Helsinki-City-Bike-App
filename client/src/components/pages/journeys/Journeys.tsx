import { useAppDispatch, useAppSelector } from "redux/hooks";
import { RootState } from "redux/store";
import { useEffect } from "react";
import { getAllJourneys } from "services/journey.services";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import AppBar from "components/appbar/AppBar";
import JourneyTable from "components/journey_table/JourneyTable";

import "./Journeys.css";

const Journeys = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllJourneys());
  }, [dispatch]);

  const { journeys } = useAppSelector((state: RootState) => state);

  return (
    <div className="home">
      <h1>Home</h1>
      <Button>
        <Link style={{ textDecoration: "none", color: "#FFF" }} to={`/`}>
          BACK
        </Link>
      </Button>
      <AppBar title={"Journeys List"} />

      <JourneyTable journeys={journeys} />
    </div>
  );
};

export default Journeys;
