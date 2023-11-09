import { useNavigate } from "react-router-dom";
import { isAuth } from "../helpers/helpers";
import { Box, Button } from "@mui/material";

import "./PrivateRoute.css";

const PrivateRoute = ({ children }: { children: React.ReactElement }) => {
  const navigate = useNavigate();

  if (!isAuth()) {
    return (
      <Box className="privateRoute">
        <h2>You are not allowed here!</h2>
        <h3>Only authorized users are allowed.</h3>
        <Button onClick={() => navigate("/signin")}>SIGNIN</Button>
      </Box>
    );
  }

  return children;
};

export default PrivateRoute;
