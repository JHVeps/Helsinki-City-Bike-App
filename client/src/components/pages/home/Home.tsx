import JourneyAppBar from "components/appbar/JourneyAppBar";
import JourneyTable from "components/journey_table/JourneyTable";

import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <h1>Home</h1>
      <JourneyAppBar />
      <JourneyTable />
    </div>
  );
};

export default Home;
