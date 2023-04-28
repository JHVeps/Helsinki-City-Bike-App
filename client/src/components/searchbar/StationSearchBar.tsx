import { SetStateAction, useState } from "react";
import { Link } from "react-router-dom";

const StationSearchBar = () => {
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
      <Link to={`/stations/search/${stationName}`}>
        <button className="searchBar__btn">SEARCH</button>
      </Link>
    </div>
  );
};
export default StationSearchBar;
