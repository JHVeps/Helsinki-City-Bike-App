import { getAllJourneys } from "services/journey.services";
import { useEffect } from "react";
import { useAppDispatch } from "redux/hooks";
import { getAllStations } from "services/station.services";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "components/pages/home/Home";
import Journeys from "components/pages/journeys/Journeys";
import Stations from "components/pages/stations/Stations";
import Station from "components/pages/single_station/Station";

import "./App.css";

const App = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getAllJourneys());
  }, [dispatch]);
  useEffect(() => {
    dispatch(getAllStations());
  }, [dispatch]);

  return (
    <div className="app">
      <h1>HELSINKI CITY BIKE APP</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/journeys" element={<Journeys />} />
          <Route path="/stations" element={<Stations />} />
          <Route path="/stations/:FID" element={<Station />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
