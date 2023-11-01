import { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "secrets/secrets";
import { Box, Button, Typography } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import { useParams } from "react-router-dom";
import jwtDecode from "jwt-decode";

import "react-toastify/dist/ReactToastify.css";
import "./Activate.css";

const Activate = () => {
  const [values, setValues] = useState({
    name: "",
    token: "",
    show: true,
  });
  const { name, show } = values;
  const { token } = useParams<{ token: string }>();

  useEffect(() => {
    if (token) {
      const decodedToken = jwtDecode(token) as { name: string } | null;
      if (decodedToken) {
        setValues({ ...values, name: decodedToken.name, token });
      }
    }
  }, []);

  const title: string = "ACCOUNT ACTIVATION";

  const clickSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    axios({
      method: "POST",
      url: `${API_URL}/auth/account-activation`,
      data: { token },
    })
      .then((response) => {
        console.log("ACCOUNT ACTIVATION", response);
        setValues({ ...values, show: false });
        toast.success(response.data.message);
      })
      .catch((error) => {
        console.log("ACCOUNT ACTIVATION ERROR", error.response.data.error);
        toast.error(error.response.data.error);
      });
  };

  const signupBtnTitle: string = "ACTIVATE ACCOUNT";

  const activationLink = () => (
    <div>
      <h1>Hey {name}, Ready to activate your account?</h1>
      <Button
        data-cy="add-user-button"
        data-testid="add_user_button"
        sx={{
          padding: "15px 20px",
          fontSize: "1.3rem",
          fontWeight: 600,
          border: "none",
          color: "#fff",
          borderRadius: "5px",
          cursor: "pointer",
          marginTop: "20px",
          "&:hover": {
            backgroundColor: "#e50914",
          },
        }}
        onClick={clickSubmit}
      >
        {signupBtnTitle}
      </Button>
    </div>
  );

  return (
    <Box>
      <ToastContainer autoClose={false} />
      <Typography sx={{ padding: "20px" }} variant="h4">
        {title}
      </Typography>
      <Box className="activate">{activationLink()}</Box>
    </Box>
  );
};

export default Activate;
