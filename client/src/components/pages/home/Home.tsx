import { useAppDispatch, useAppSelector } from "redux/hooks";
import { useEffect } from "react";
import { getAllJourneys } from "services/journey.services";
import { RootState } from "redux/store";
import JAppBar from "components/appbar/JAppBar";
import JourneyTable from "components/journey_table/JourneyTable";

import "./Home.css";

const Home = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllJourneys());
  }, [dispatch]);
  const { journeys } = useAppSelector((state: RootState) => state);
  return (
    <div className="home">
      <h1>Home</h1>
      <JAppBar />
      <JourneyTable journeys={journeys} />
    </div>
  );
};

export default Home;
