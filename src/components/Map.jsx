import {
  useJsApiLoader,
  GoogleMap,
  Marker
} from "@react-google-maps/api";
import React from "react";

const containerStyle = {
  width: "100%",
  height: "450px",
};

const center = {
  lat: 57.7099144609402,
  lng: 11.994554255984776,
};

function Map() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyBLWanYeOgZf97PIHpX-3kcghuhsIqFIgw",
  });

  const [map, setMap] = React.useState(null);

  if (!isLoaded) {
    return;
  }

  return isLoaded ? (
    <GoogleMap
      center={center}
      zoom={17}
      mapContainerStyle={containerStyle}
      options={{
        zoomControl: true,
        streetViewControl: false,
        mapTypeControl: false,
        fullscreenControl: false,
      }}
      onLoad={(map) => setMap(map)}
    >
      <Marker position={center} />
    </GoogleMap>
  ) : (
    <></>
  );
}

export default Map;
