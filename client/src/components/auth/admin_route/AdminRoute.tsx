import { useNavigate } from "react-router-dom";
import { isAuth } from "../helpers/helpers";
import { Box, Button } from "@mui/material";

import "./AdminRoute.css";

const AdminRoute = ({ children }: { children: React.ReactElement }) => {
  const navigate = useNavigate();

  if (isAuth() && isAuth().role === "admin") {
    return children;
  }

  return (
    <Box className="adminRoute">
      <h2>You are not allowed here!</h2>
      <h3>Only admin users can access.</h3>
      <Button onClick={() => navigate("/home")}>HOME</Button>
    </Box>
  );
};

export default AdminRoute;
