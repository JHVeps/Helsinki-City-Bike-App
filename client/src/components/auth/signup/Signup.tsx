import { useAppDispatch } from "redux/hooks";
import { useNavigate } from "react-router-dom";
import { Box, Button, FormLabel, Typography } from "@mui/material";
import { User } from "types/user.types";
import { signupFormlabels } from "types/auth.types";
import Navigation from "../../navigation/authNavigation";
import { Field, Form, Formik } from "formik";
import { signupUser } from "services/auth.services";

import "react-toastify/dist/ReactToastify.css";
import "./Signup.css";

type SignupFormProps = {
  displayToast: (
    message: string,
    type: "success" | "error" | "warning"
  ) => void;
};

const Signup = ({ displayToast }: SignupFormProps) => {
  const title: string = "SIGNUP AS NEW USER";
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const initialValues: User = {
    name: "",
    email: "",
    password: "",
  };

  const formLabels: signupFormlabels = {
    NAME: "NAME",
    EMAIL: "EMAIL",
    PASSWORD: "PASSWORD",
  };

  const displaySignupSuccessMessage = (message: string) => {
    displayToast(`${message} `, "success");
  };

  const displaySignupErrorMessagewithResponse = (message: string) => {
    displayToast(message || "Signup failed. Please try again.", "error");
  };

  const displaySignupErrorMessage = () => {
    displayToast("Signup failed. Please try again.", "error");
  };

  const signupBtnTitle: string = "SUBMIT";

  return (
    <Box>
      <Typography sx={{ padding: "20px" }} variant="h4">
        {title}
      </Typography>
      <Navigation />
      <Box className="signup">
        <Formik
          initialValues={initialValues}
          onSubmit={async (values, { resetForm }) => {
            try {
              const response = await dispatch(signupUser(values));

              if (signupUser.fulfilled.match(response)) {
                displaySignupSuccessMessage(response.payload.data.message);
                resetForm();
                navigate("/home");
              } else {
                displaySignupErrorMessagewithResponse(response.error.message!);
              }
            } catch (error) {
              displaySignupErrorMessage();
            }
          }}
        >
          <Form>
            <FormLabel sx={{ color: "white" }}>{formLabels.NAME}</FormLabel>
            <Field
              data-cy="user-NAME-input"
              data-testid="user_NAME_input"
              name="name"
              type="text"
              placeholder="NAME"
            />
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

export default Signup;
