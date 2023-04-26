import { AppBar, Toolbar, Typography } from "@mui/material";

const JAppBar = () => {
  return (
    <AppBar
      position="static"
      style={{ background: "#111", textAlign: "center" }}
    >
      <Toolbar>
        <Typography variant="h4">Journeys</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default JAppBar;
