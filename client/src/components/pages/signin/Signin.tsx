import { Box, Typography } from "@mui/material";
import SigninForm from "components/auth/signin/SigninForm";
import { Navigate } from "react-router-dom";
import { isAuth } from "components/auth/helpers/helpers";

type SigninProps = {
  displayToast: (message: string, type: any) => void;
};

function Signin({ displayToast }: SigninProps) {
  const title: string = "SIGNIN";

  return (
    <Box>
      {isAuth() ? <Navigate to="/home" /> : null}
      <Typography sx={{ padding: "20px" }} variant="h4">
        {title}
      </Typography>
      <SigninForm displayToast={displayToast} />
    </Box>
  );
}

export default Signin;
