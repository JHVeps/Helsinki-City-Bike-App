import { Box } from "@mui/material";
import LinkButton from "components/buttons/LinkButton";

const SignupNavigation = () => {
  return (
    <Box sx={{ margin: "auto", padding: "20px" }}>
      <LinkButton
        textDecoration="none"
        color="#FFF"
        fontSize="1.5rem"
        path="/"
        title="SIGNIN"
      />
    </Box>
  );
};

export default SignupNavigation;
