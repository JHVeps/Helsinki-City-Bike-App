import { Box, Button, FormLabel, Typography } from "@mui/material";
import { User } from "types/user.types";
import { signupFormlabels } from "types/auth.types";
import Navigation from "../../navigation/authNavigation";
import { Field, Form, Formik } from "formik";
import { useAppDispatch } from "redux/hooks";
import { signupUser } from "services/auth.services";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "./Signup.css";

const Signup = () => {
  //   const [values, setValues] = useState({
  //     name: "",
  //     email: "",
  //     password: "",
  //     buttonText: "Submit",
  //   });

  const title: string = "SIGNUP AS NEW USER";
  const dispatch = useAppDispatch();

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

  const displayToast = (
    message: string,
    type: "success" | "error" | "warning"
  ) => {
    toast(message, { type });
  };

  const signupBtnTitle: string = "SUBMIT";

  //   const { name, email, password, buttonText } = values;

  //   const handleChange = (name: string) => (event: any) => {};

  // const clickSubmit = (event: any) => {};

  //   const signupForm = () => (
  //     <form>
  //       <div>
  //         <label>Name</label>
  //         <input onChange={handleChange("name")} type="text" />
  //       </div>
  //       <div>
  //         <label>Email</label>
  //         <input onChange={handleChange("email")} type="email" />
  //       </div>
  //       <div>
  //         <label>Password</label>
  //         <input onChange={handleChange("password")} type="password" />
  //       </div>
  //       <div>
  //         <button onClick={clickSubmit}>{buttonText}</button>
  //       </div>
  //     </form>
  //   );

  return (
    <Box>
      <ToastContainer autoClose={false} />
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
                displayToast(response.payload.data.message, "success");
                console.log(
                  "<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<RESPONSE:",
                  response
                );
                resetForm();
              } else {
                displayToast(
                  response.error.message || "Signup failed. Please try again.",
                  "error"
                );
              }
            } catch (error) {
              displayToast("Signup failed. Please try again.", "error");
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
