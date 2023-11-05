import { Box, Button, FormLabel, Typography } from "@mui/material";
import Navigation from "../../navigation/authNavigation";
import { SigninUser, signinFormlabels } from "types/auth.types";
import { Field, Form, Formik } from "formik";
import { useAppDispatch } from "redux/hooks";
import { ToastContainer, toast } from "react-toastify";
import { signinUser } from "services/auth.services";

import "react-toastify/dist/ReactToastify.css";
import "./Signin.css";
import { authenticate } from "../helpers/helpers";

const Signin = () => {
  const title: string = "SIGNIN";
  const dispatch = useAppDispatch();

  const initialValues: SigninUser = {
    email: "",
    password: "",
  };

  const formLabels: signinFormlabels = {
    EMAIL: "EMAIL",
    PASSWORD: "PASSWORD",
  };

  const displayToast = (
    message: string,
    type: "success" | "error" | "warning"
  ) => {
    toast(message, { type });
  };

  const signupBtnTitle: string = "SIGNIN";

  return (
    <Box>
      <ToastContainer />
      <Typography sx={{ padding: "20px" }} variant="h4">
        {title}
      </Typography>
      <Navigation />
      <Box className="signin">
        <Formik
          initialValues={initialValues}
          onSubmit={async (values, { resetForm }) => {
            try {
              const response = await dispatch(signinUser(values));

              if (signinUser.fulfilled.match(response)) {
                // Call the authenticate function here
                authenticate(response, () => {
                  // This is where you can put any logic you want to run after authentication
                  console.log(
                    "User authenticated:",
                    response.payload.data.user
                  );
                  displayToast(
                    `Hey ${response.payload.data.user.name}, Welcome back! `,
                    "success"
                  );
                  console.log(
                    "<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<RESPONSE:",
                    response
                  );
                  resetForm();
                });
              } else {
                displayToast(
                  response.error.message || "Signin failed. Please try again.",
                  "error"
                );
              }
            } catch (error) {
              displayToast("Signin failed. Please try again.", "error");
            }
          }}
        >
          <Form>
            <FormLabel sx={{ color: "white" }}>{formLabels.EMAIL}</FormLabel>
            <Field
              data-cy="user-EMAIL-input"
              data-testid="user_EMAIL_input"
              name="email"
              type="email"
              placeholder="EMAIL"
            />
            <FormLabel sx={{ color: "white" }}>{formLabels.PASSWORD}</FormLabel>
            <Field
              data-cy="user-PASSWORD-input"
              name="password"
              type="password"
              placeholder="PASSWORD"
            />

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
              type="submit"
            >
              {signupBtnTitle}
            </Button>
          </Form>
        </Formik>
      </Box>
    </Box>
  );
};

export default Signin;
