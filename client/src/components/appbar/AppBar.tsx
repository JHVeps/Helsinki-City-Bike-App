import { appBarProps } from "types/general.types";
import {
  AppBar,
  Toolbar,
  Typography,
  alpha,
  InputBase,
  styled,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export const Filter = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

export const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const JAppBar = ({ title, text, setText }: appBarProps) => {
  return (
    <AppBar
      position="static"
      style={{ background: "#111", textAlign: "center" }}
    >
      <Toolbar>
        <Typography variant="h5">{title}</Typography>
        <Filter>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            data-cy="filter-input"
            type="text"
            placeholder="Filter list"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </Filter>
      </Toolbar>
    </AppBar>
  );
};

export default JAppBar;
