import Navigation from "components/navigation/HomeNavigation";
import { Box, Typography } from "@mui/material";

const Home = () => {
  const title: string = "HOME";
  return (
    <Box sx={{ padding: "100px" }}>
      <Typography sx={{ padding: "20px" }} variant="h4">
        {title}
      </Typography>
      <Navigation />
    </Box>
  );
};

export default Home;
