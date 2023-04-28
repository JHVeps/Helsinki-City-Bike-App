import { useState } from "react";
import { useAppSelector } from "redux/hooks";
import { RootState } from "redux/store";
import JourneysNavigation from "components/navigation/JourneysNavigation";
import AppBar from "components/appbar/AppBar";
import JourneyTable from "components/journey_table/JourneyTable";

import "./Journeys.css";

const Journeys = () => {
  const { journeys } = useAppSelector((state: RootState) => state);
  const [text, setText] = useState("");

  return (
    <div className="journey">
      <h1>Journeys</h1>
      <JourneysNavigation />
      <AppBar title={"Journeys List"} text={text} setText={setText} />
      <JourneyTable journeys={journeys} text={text} />
    </div>
  );
};

export default Journeys;
