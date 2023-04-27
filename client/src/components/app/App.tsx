import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "components/pages/home/Home";
import Journeys from "components/pages/journeys/Journeys";
import Stations from "components/pages/stations/Stations";

import "./App.css";

const App = () => {
  return (
    <div className="app">
      <h1>HELSINKI CITY BIKE APP</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/journeys" element={<Journeys />} />
          <Route path="/stations" element={<Stations />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
