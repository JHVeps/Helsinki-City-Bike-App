import { useEffect } from "react";
import { useAppDispatch } from "redux/hooks";
import { getAllJourneys } from "services/journey.services";
import { getAllStations } from "services/station.services";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import Home from "components/pages/home/Home";
import Journeys from "components/pages/journeys/Journeys";
import JourneysSearched from "components/pages/journeys_searched/JourneysSearched";
import Stations from "components/pages/stations/Stations";
import Station from "components/pages/stations_single/Station";
import StationSearched from "components/pages/station_searched/StationSearched";

const App = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getAllJourneys());
  }, [dispatch]);
  useEffect(() => {
    dispatch(getAllStations());
  }, [dispatch]);

  return (
    <Box
      sx={{
        bgcolor: "#2b2b2b",
        color: "white",
        "margin-left": "20px",
        "margin-right": "20px",
      }}
    >
      <Typography sx={{ textAlign: "center" }} variant="h1">
        HELSINKI CITY BIKE APP
      </Typography>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/journeys" element={<Journeys />} />
          <Route path="/journeys/:stationName" element={<JourneysSearched />} />
          <Route path="/stations" element={<Stations />} />
          <Route path="/stations/:FID" element={<Station />} />
          <Route
            path="/stations/search/:stationName"
            element={<StationSearched />}
          />
        </Routes>
      </BrowserRouter>
    </Box>
  );
};
export default App;
