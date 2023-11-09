import { useNavigate, useLocation } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";
import { isAuth, signout } from "components/auth/helpers/helpers";
import LinkButton from "components/buttons/LinkButton";
import SearchBar from "components/searchbar/SearchBar";

const MainNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);

  const isActive = (path: string) => {
    if (location.pathname === "/") {
      return "#FFF";
    } else if (path === location.pathname) {
      return "#555";
    } else {
      return "#FFF";
    }
  };

  return (
    <Box sx={{ margin: "auto", padding: "20px" }}>
      {!isAuth() && (
        <>
          <LinkButton
            textDecoration="none"
            color={isActive("/signup")}
            fontSize="1.5rem"
            path="/signup"
            title="SIGNUP"
          />
          <LinkButton
            textDecoration="none"
            color={isActive("/signin")}
            fontSize="1.5rem"
            path="/signin"
            title="SIGNIN"
          />
        </>
      )}
      {isAuth() && (
        <>
          <LinkButton
            textDecoration="none"
            color={isActive("/home")}
            fontSize="1.5rem"
            path="/home"
            title="HOME"
          />
          <LinkButton
            textDecoration="none"
            color={isActive("/journeys")}
            fontSize="1.5rem"
            path="/journeys"
            title="JOURNEYS LIST"
          />
          <LinkButton
            textDecoration="none"
            color={isActive("/stations")}
            fontSize="1.5rem"
            path="/stations"
            title="STATIONS LIST"
          />
          <LinkButton
            textDecoration="none"
            color={isActive("/stations/add_new_station")}
            fontSize="1.5rem"
            path="/stations/add_new_station"
            title="ADD NEW STATION"
          />
          {isAuth() && isAuth().role === "user" && (
            <LinkButton
              textDecoration="none"
              color={isActive(`/user/${isAuth().name}`)}
              fontSize="1.5rem"
              path={`/user/${isAuth().name}`}
              title={isAuth().name}
            />
          )}

          {isAuth() && isAuth().role === "admin" && (
            <LinkButton
              textDecoration="none"
              color={isActive(`/user/${isAuth().name}`)}
              fontSize="1.5rem"
              path={"admin"}
              title={isAuth().name}
            />
          )}

          <Button
            sx={{
              textDecoration: "none",
              color: "#FFF",
              fontSize: "1.5rem",
              "&:hover": {
                backgroundColor: "#e50914",
              },
            }}
            onClick={() => {
              signout(() => {
                navigate("/");
              });
            }}
          >
            SIGNOUT
          </Button>

          {location.pathname === "/stations" && (
            <SearchBar url={"/stations/search/"} buttonTitle="SEARCH" />
          )}
          {location.pathname === "/journeys" && (
            <SearchBar url={"/stations/search/"} buttonTitle="SEARCH" />
          )}
        </>
      )}
    </Box>
  );
};

export default MainNavigation;
