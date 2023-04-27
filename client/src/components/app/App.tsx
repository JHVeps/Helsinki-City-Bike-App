import Stations from "components/pages/stations/Stations";
import Home from "components/pages/home/Home";

import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="app">
      <h1>HELSINKI CITY BIKE APP</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stations" element={<Stations />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
