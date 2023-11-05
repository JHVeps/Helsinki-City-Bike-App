import { useState, useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import { Link, useParams } from "react-router-dom";
import jwtDecode from "jwt-decode";
import { useAppDispatch } from "redux/hooks";
import { activateAccount } from "services/auth.services";

import "react-toastify/dist/ReactToastify.css";
import "./Activate.css";

const Activate = () => {
  const [values, setValues] = useState({
    name: "",
    show: true,
  });
  const dispatch = useAppDispatch();
  const { name, show } = values;
  const { token } = useParams<{ token: string }>();

  useEffect(() => {
    if (token) {
      const decodedToken = jwtDecode(token) as { name: string } | null;
      if (decodedToken) {
        setValues({ ...values, name: decodedToken.name });
      }
    }
  }, []);

  const title: string = "ACCOUNT ACTIVATION";

  const displayToast = (
    message: string,
    type: "success" | "error" | "warning"
  ) => {
    toast(message, { type });
  };

  const clickSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (token) {
      try {
        const response = await dispatch(activateAccount(token));

        if (activateAccount.fulfilled.match(response)) {
          setValues({ ...values, show: false });
          displayToast(
            `ACCOUNT ACTIVATION: ${response.payload.message}`,
            "success"
          );
        } else {
          displayToast(
            response.error.message || "ACCOUNT ACTIVATION ERROR",
            "error"
          );
        }
      } catch (error) {
        displayToast("ACCOUNT ACTIVATION ERROR", "error");
      }
    }
  };

  const signupBtnTitle: string = "ACTIVATE ACCOUNT";

  const activationLink = () => {
    return (
      <div>
        {show ? (
          <>
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
          </>
        ) : (
          <Button
            sx={{
              "&:hover": {
                backgroundColor: "#e50914",
              },
            }}
          >
            <Link
              style={{
                textDecoration: "none",
                color: "#FFF",
                fontSize: "1.5rem",
              }}
              to={"/"}
            >
              SIGNIN
            </Link>
          </Button>
        )}
      </div>
    );
  };

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
