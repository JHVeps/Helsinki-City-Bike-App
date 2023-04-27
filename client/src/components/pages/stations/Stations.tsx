import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { RootState } from "redux/store";
import { getAllStations } from "services/station.services";

import "./Stations.css";

const Home = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllStations());
  }, [dispatch]);
  const { stations } = useAppSelector((state: RootState) => state);

  console.log("stations state: ", stations);
  return (
    <div className="station">
      <h1>Stations</h1>
    </div>
  );
};

export default Home;
