import { AppBar, Toolbar, Typography } from "@mui/material";
import { appBarProps } from "types";

const JAppBar = (props: appBarProps) => {
  const { title } = props;
  return (
    <AppBar
      position="static"
      style={{ background: "#111", textAlign: "center" }}
    >
      <Toolbar>
        <Typography variant="h5">{title}</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default JAppBar;
