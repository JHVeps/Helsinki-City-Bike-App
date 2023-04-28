import { MapProps } from "types/station.types";
import { useMemo } from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";

import "./mapStyle.css";

const Map = (props: MapProps) => {
  const { lat, lng } = props;
  const center = useMemo(() => ({ lat: lat, lng: lng }), []);

  let url = process.env.REACT_APP_GOOGLE_MAP_API;

  if (!url) {
    url = "AIzaSyAW8VT7J9NqA8FEJjWAC9vdFVHCgREuASg";
  }

  console.log(url);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: url,
  });

  if (!isLoaded)
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );

  return (
    <GoogleMap zoom={15} center={center} mapContainerClassName="map__container">
      <MarkerF position={center} />
    </GoogleMap>
  );
};
export default Map;
