import { useAppSelector } from "redux/hooks";
import { RootState } from "redux/store";
import { Button } from "@mui/material";
import { Link, useParams } from "react-router-dom";

const Station = () => {
  const { stations } = useAppSelector((state: RootState) => state);
  const { FID } = useParams<{ FID: string }>();

  if (FID) {
    const stationData = stations.items.find((s) => s.FID === parseInt(FID));
    if (stationData) {
      return (
        <div>
          <h1>{stationData.Nimi}</h1>
          <Button>
            <Link style={{ textDecoration: "none", color: "#FFF" }} to={`/`}>
              HOME
            </Link>
          </Button>
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
    }
  }
  return (
    <div>
      <h1>NOT FOUND</h1>
      <Button>
        <Link style={{ textDecoration: "none", color: "#FFF" }} to={`/`}>
          HOME
        </Link>
      </Button>
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
export default Station;
