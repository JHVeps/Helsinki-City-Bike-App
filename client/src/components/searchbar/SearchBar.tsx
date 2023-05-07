import { SearchBarProps } from "types/general.types";
import { SetStateAction, useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";

const SearchBar = ({ url, buttonTitle }: SearchBarProps) => {
  const [stationName, setStationName] = useState("");
  const onChangeStationName = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setStationName(e.target.value);
  };

  return (
    <Box sx={{ textAlign: "center" }}>
      <TextField
        data-cy="search-input"
        sx={{
          outlineWidth: 0,
          width: "30%",
          border: "none",
          maxWidth: "400px",
          bgcolor: "background.paper",
        }}
        type="text"
        name="stationName"
        value={stationName}
        onChange={onChangeStationName}
        placeholder="SEARCH..."
      />
      <Link data-testid="searchbar_link" to={`${url}${stationName}`}>
        <Button
          data-testid="searchbar_btn"
          sx={{
            padding: "15px 18px",
            fontSize: "1rem",
            color: "#fff",
            border: "none",
            fontWeight: 600,
            cursor: "pointer",
            "&:hover": {
              backgroundColor: "#e50914",
            },
          }}
        >
          {buttonTitle}
        </Button>
      </Link>
    </Box>
  );
};

export default SearchBar;
