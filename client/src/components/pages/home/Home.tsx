import { Button } from "@mui/material";
import { Link } from "react-router-dom";

import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <h1>Home</h1>
      <Button>
        <Link
          style={{ textDecoration: "none", color: "#FFF" }}
          to={`/journeys`}
        >
          JOURNEYS LIST
        </Link>
      </Button>
      <Button>
        <Link
          style={{ textDecoration: "none", color: "#FFF" }}
          to={`/stations`}
        >
          STATIONS LIST
        </Link>
      </Button>
    </div>
  );
};

export default Home;
