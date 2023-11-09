import { Box, Typography } from "@mui/material";

const Home = () => {
  const title: string = "HOME";
  return (
    <Box sx={{ padding: "100px" }}>
      <Typography sx={{ padding: "20px" }} variant="h4">
        {title}
      </Typography>
    </Box>
  );
};

export default Home;
