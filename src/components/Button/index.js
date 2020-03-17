import React from "react";
import Button from "@material-ui/core/Button";
import useGeolocation from "react-hook-geolocation";
import "./style.css";

function ComponentWithGeolocation() {
  const geolocation = useGeolocation();

  return !geolocation.error
    ? console.log(
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
      )
    : console.log(<p>No geolocation, sorry.</p>);
}

//Gets Location of User
export default function ButtonLocale() {
  return (
    <Button
      variant="contained"
      color="primary"
      onClick={ComponentWithGeolocation}
      id="button"
    >
      Get Location
    </Button>
  );
}
