import { useEffect, useState } from "react";
import { useAppDispatch } from "redux/hooks";
import { getAllJourneys } from "services/journey.services";
import { getAllStations } from "services/station.services";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import Navigation from "components/navigation/MainNavigation";
import LandingPage from "components/pages/landing_page/LandingPage";
import Signup from "components/auth/signup/Signup";
import Activate from "components/auth/activate/Activate";
import Signin from "components/auth/signin/SigninForm";
import AdminRoute from "components/auth/admin_route/AdminRoute";
import Admin from "components/pages/admin/Admin";
import PrivateRoute from "components/auth/private_route/PrivateRoute";
import User from "components/pages/user/User";
import Home from "components/pages/home/Home";
import Journeys from "components/pages/journeys/Journeys";
import JourneysSearched from "components/pages/journeys_searched/JourneysSearched";
import Stations from "components/pages/stations/Stations";
import Station from "components/pages/stations_single/Station";
import StationSearched from "components/pages/station_searched/StationSearched";
import NewStation from "components/pages/newstation/NewStation";

import "./App.css";

const App = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getAllJourneys());
  }, [dispatch]);
  useEffect(() => {
    dispatch(getAllStations());
  }, [dispatch]);

  const [toastMessage, setToastMessage] = useState("");
  console.log(toastMessage);
  const homeTitle: string = "HELSINKI CITY BIKE APP";

  const displayToastInApp = (message: string, type: any) => {
    toast(message, { type });
    setToastMessage(message);
  };

  return (
    <Box
      sx={{
        bgcolor: "#2b2b2b",
        color: "white",
        // marginLeft: "20px",
        // marginRight: "20px",
      }}
    >
      <Box className="img__container">
        <Box className="img__container__gradient">
          <ToastContainer />
          <Typography sx={{ textAlign: "center" }} variant="h1">
            {homeTitle}
          </Typography>

          <BrowserRouter>
            <Navigation />
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route
                path="/signup"
                element={<Signup displayToast={displayToastInApp} />}
              />
              <Route path="/auth/activate/:token" element={<Activate />} />
              <Route
                path="/signin"
                element={<Signin displayToast={displayToastInApp} />}
              />
              <Route
                path="/admin"
                element={
                  <AdminRoute>
                    <Admin />
                  </AdminRoute>
                }
              />
              <Route
                path="/user"
                element={
                  <PrivateRoute>
                    <User />
                  </PrivateRoute>
                }
              />
              <Route
                path="/home"
                element={
                  <PrivateRoute>
                    <Home />
                  </PrivateRoute>
                }
              />
              <Route
                path="/journeys"
                element={
                  <PrivateRoute>
                    <Journeys title={"JOURNEYS"} />
                  </PrivateRoute>
                }
              />
              <Route
                path="/journeys/search/:stationName"
                element={
                  <PrivateRoute>
                    <JourneysSearched />
                  </PrivateRoute>
                }
              />
              <Route
                path="/stations"
                element={
                  <PrivateRoute>
                    <Stations title={"STATIONS"} />
                  </PrivateRoute>
                }
              />
              <Route path="/stations/:FID" element={<Station />} />
              <Route
                path="/stations/search/:stationName"
                element={
                  <PrivateRoute>
                    <StationSearched />
                  </PrivateRoute>
                }
              />
              <Route
                path="/stations/add_new_station"
                element={
                  <AdminRoute>
                    <NewStation />
                  </AdminRoute>
                }
              />
            </Routes>
          </BrowserRouter>
        </Box>
      </Box>
    </Box>
  );
};
export default App;
