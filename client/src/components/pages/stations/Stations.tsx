import { useState } from "react";
import { useAppSelector } from "redux/hooks";
import { RootState } from "redux/store";
import Navigation from "../../navigation/StationsNavigation";
import AppBar from "components/appbar/AppBar";
import StationTable from "components/station_table/StationTable";

import "./Stations.css";

const Stations = () => {
  const { stations } = useAppSelector((state: RootState) => state);
  const [text, setText] = useState("");
  return (
    <div className="station">
      <h1>Stations</h1>
      <Navigation />
      <AppBar title={"Stations List"} text={text} setText={setText} />
      <StationTable stations={stations} />
    </div>
  );
};

export default Stations;
