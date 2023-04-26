import Home from "components/pages/home/Home";

import "./App.css";
import { useEffect } from "react";
import { useAppDispatch } from "redux/hooks";
import { getAllJourneys } from "services/journey.services";

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllJourneys());
  }, [dispatch]);

  console.log("App here");
  return (
    <div className="app">
      <h1>HELSINKI CITY BIKE APP</h1>
      <Home />
    </div>
  );
};
export default App;
