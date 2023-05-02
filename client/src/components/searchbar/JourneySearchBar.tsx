import { SetStateAction, useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";

const JourneySearchBar = () => {
  const [stationName, setStationName] = useState("");

  const onChangeStationName = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setStationName(e.target.value);
  };

  return (
    <Box sx={{ "text-align": "center" }}>
      <TextField
        sx={{
          "outline-width": 0,
          width: "30%",
          border: "none",
          "max-width": "400px",
          bgcolor: "background.paper",
        }}
        type="text"
        name="stationName"
        value={stationName}
        onChange={onChangeStationName}
        placeholder="SEARCH..."
      />
      <Link to={`/journeys/${stationName}`}>
        <Button
          sx={{
            padding: "15px 18px",
            "font-size": "1rem",
            color: "#fff",
            bgcolor: "#111",
            border: "none",
            "font-weight": 600,
            cursor: "pointer",
          }}
        >
          SEARCH
        </Button>
      </Link>
    </Box>
  );
};

export default JourneySearchBar;
