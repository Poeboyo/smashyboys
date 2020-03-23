import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

import "dotenv";

const style = {
  height: "65vh",
  width: "90vh",
  marginLeft: "70vh",
  marginTop: "-25vh",
  position: "absolute"
};

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        id="googleMap"
        style={style}
        initialCenter={{
          lat: {position.latitude},
          lng: -88.081807
        }}
      >
        <Marker onClick={this.onMarkerClick} name={"Current location"} />
        <InfoWindow onClose={this.onInfoWindowClose}>
          <div></div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCGFi8yGjUKqyOemc8Mtv1nQ3HCdxUV8E8"
})(MapContainer);
