import React, { useMemo, useRef } from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import "./style.css";

export default function Home() {
  const { isLoaded, url, loadError } = useLoadScript({
    // replace the below with your own API key
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  //shows loading screen while map is loading
  if (!isLoaded) return <div>Loading...</div>;
  if (loadError) return <div>Error loading maps, check your API key</div>;

  return (
    <div>
      {url}
      <Map />;
    </div>
  );
}

function Map() {
  //sets the center of the map to NYC
  const center = useMemo(() => ({ lat: 40.7128, lng: -74.006 }), []);
  const markerPositions = useMemo(() => [{ lat: 40.7128, lng: -74.006 }, {lat: 40.7, lng: -74.1}, {lat: 40.8, lng: -74.3}], []);

  return (
    <div className="map-container">
      <GoogleMap
        zoom={10}
        center={center}
        mapContainerClassName="map-container"
      >
        {markerPositions.map((position) => (
          <MarkerF position={position} />
        ))}

      </GoogleMap>
    </div>
  );
}
