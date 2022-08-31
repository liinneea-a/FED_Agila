import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import React from "react";

const containerStyle = {
  width: "100%",
  height: "450px",
};

const school = {
  lat: 57.7099144609402,
  lng: 11.994554255984776,

};

function Map() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyBLWanYeOgZf97PIHpX-3kcghuhsIqFIgw",
  });

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(school);
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const [map, setMap] = React.useState(null);
  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      school={school}
      zoom={9}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
    </GoogleMap>
  ) : (
    <></>
  );
}

export default Map;
