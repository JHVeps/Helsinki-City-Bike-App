import { Box } from "@mui/material";
import LinkButton from "components/buttons/LinkButton";

const authNavigation = () => {
  return (
    <Box sx={{ margin: "auto", padding: "20px" }}>
      <LinkButton
        textDecoration="none"
        color="#FFF"
        fontSize="1.5rem"
        path="/"
        title="BACK"
      />
    </Box>
  );
};

export default authNavigation;
