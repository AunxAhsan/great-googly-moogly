import React, { useMemo, useRef } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import "./style.css";

export default function Home() {
  const { isLoaded, url, loadError } = useLoadScript({
    // replace the below with your own API key
    // should be googleMapsApiKey: "ADASD!@DQ!DASD!@@DQWWD!@D!@D@!D"
    googleMapsApiKey: "YOUR API KEY HERE",
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

  return (
    <div className="map-container">
      <GoogleMap
        zoom={10}
        center={center}
        mapContainerClassName="map-container"
      >
        <Marker position={center} />
      </GoogleMap>
    </div>
  );
}
