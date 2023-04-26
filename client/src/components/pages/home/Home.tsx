import JAppBar from "../../appbar/JAppBar";
import JourneyTable from "../../journey_table/JourneyTable";

import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <h1>Home</h1>
      <JAppBar />
      <JourneyTable />
    </div>
  );
};

export default Home;
