import { useEffect } from "react";
import { useAppDispatch } from "../../redux/hooks";
import { getAllJourneys } from "../../services/journey.services";
import Home from "../pages/home/Home";

import "./App.css";

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllJourneys());
  }, [dispatch]);

  return (
    <div className="app">
      <h1>HELSINKI CITY BIKE APP</h1>
      <Home />
    </div>
  );
};
export default App;
