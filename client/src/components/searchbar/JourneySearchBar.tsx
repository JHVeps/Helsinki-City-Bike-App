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
      <Link to={`/journeys/${stationName}`}>
        <Button
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
          SEARCH
        </Button>
      </Link>
    </Box>
  );
};

export default JourneySearchBar;
