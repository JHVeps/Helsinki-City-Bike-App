import { useAppDispatch } from "redux/hooks";
import { useNavigate } from "react-router-dom";
import { SigninUser, signinFormlabels } from "types/auth.types";
import { Box, Button, FormLabel } from "@mui/material";
import { authenticate } from "../helpers/helpers";
import { Field, Form, Formik } from "formik";
import { signinUser } from "services/auth.services";

import "react-toastify/dist/ReactToastify.css";
import "./SigninForm.css";

type SigninFormProps = {
  displayToast: (
    message: string,
    type: "success" | "error" | "warning"
  ) => void;
};

const SigninForm = ({ displayToast }: SigninFormProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const initialValues: SigninUser = {
    email: "",
    password: "",
  };

  const formLabels: signinFormlabels = {
    EMAIL: "EMAIL",
    PASSWORD: "PASSWORD",
  };

  // TODO make one generic display component for showing messages in ToastContainer
  const displaySignInSuccessMessage = (message: string) => {
    displayToast(`Hey ${message}, Welcome back! `, "success");
  };

  const displaySignInErrorMessagewithResponse = (message: string) => {
    displayToast(message || "Signin failed. Please try again.", "error");
  };

  const displaySignInErrorMessage = () => {
    displayToast("Signin failed. Please try again.", "error");
  };

  const signupBtnTitle: string = "SIGNIN";
  return (
    <Box className="signin">
      <Formik
        initialValues={initialValues}
        onSubmit={async (values, { resetForm }) => {
          try {
            const response = await dispatch(signinUser(values));

            if (signinUser.fulfilled.match(response)) {
              authenticate(response, () => {
                displaySignInSuccessMessage(response.payload.data.user.name);
                resetForm();
                navigate("/home");
              });
            } else {
              displaySignInErrorMessagewithResponse(response.error.message!);
            }
          } catch (error) {
            displaySignInErrorMessage();
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
  );
};

export default SigninForm;
