import { MapProps } from "types/station.types";
import { useMemo } from "react";
import { REACT_APP_GOOGLE_MAP_API } from "secrets/secrets";
import { Box, Typography } from "@mui/material";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";

import "./mapStyle.css";

const Map = ({ lat, lng }: MapProps) => {
  const center = useMemo(() => ({ lat: lat, lng: lng }), []);

  const url = REACT_APP_GOOGLE_MAP_API;
  const loadingInfo: string = "LOADING...";

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: url as string,
  });

  if (!isLoaded)
    return (
      <Box>
        <Typography variant="h2">{loadingInfo}</Typography>
      </Box>
    );

  return (
    <GoogleMap zoom={15} center={center} mapContainerClassName="map__container">
      <MarkerF position={center} />
    </GoogleMap>
  );
};
export default Map;
