import React from "react";
import useGeolocation from "react-hook-geolocation";
import "./style.css";

function GeolocationContainer() {
  const geolocation = useGeolocation({
    enableHighAccuracy: true,
    maximumAge: 15000,
    timeout: 12000
  });

  return (
    <div id="geoLocationInfo">
      {!geolocation.error ? (
        <ul>
          <li>Latitude: {geolocation.latitude}</li>
          <li>Longitude: {geolocation.longitude}</li>
          <li>Location accuracy: {geolocation.accuracy}</li>
          <li>Altitude: {geolocation.altitude}</li>
          <li>Altitude accuracy: {geolocation.altitudeAccuracy}</li>
          <li>Heading: {geolocation.heading}</li>
          <li>Speed: {geolocation.speed}</li>
          <li>Timestamp: {geolocation.timestamp}</li>
        </ul>
      ) : (
        <p>No geolocation, sorry.</p>
      )}
    </div>
  );
}

export default GeolocationContainer;
