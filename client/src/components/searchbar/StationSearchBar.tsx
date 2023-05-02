import { Box, Button, TextField } from "@mui/material";
import { SetStateAction, useState } from "react";
import { Link } from "react-router-dom";

const StationSearchBar = () => {
  const [stationName, setStationName] = useState("");

  const onChangeStationName = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setStationName(e.target.value);
  };

  return (
    <Box sx={{ textAlign: "center" }}>
      <TextField
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
      <Link to={`/stations/search/${stationName}`}>
        <Button
          sx={{
            padding: "15px 18px",
            fontSize: "1rem",
            color: "#fff",
            bgcolor: "#111",
            border: "none",
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          SEARCH
        </Button>
      </Link>
    </Box>
  );
};
export default StationSearchBar;
