import { SetStateAction, useState } from "react";
import { Link } from "react-router-dom";

import "./SearchBar.css";

const JourneySearchBar = () => {
  const [stationName, setStationName] = useState("");

  const onChangeStationName = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setStationName(e.target.value);
  };

  return (
    <div className="searchBar">
      <input
        className="searchBar__input"
        type="text"
        name="stationName"
        value={stationName}
        onChange={onChangeStationName}
        placeholder="SEARCH..."
      />
      <Link to={`/journeys/${stationName}`}>
        <button className="searchBar__btn">SEARCH</button>
      </Link>
    </div>
  );
};

export default JourneySearchBar;
