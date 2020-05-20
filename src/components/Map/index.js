import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import "dotenv";

const style = {
  height: "65vh",
  width: "90vh",
  marginLeft: "70vh",
  marginTop: "-25vh",
  position: "absolute",
};

export class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { lat: 0, long: 0 };
    console.log(this);
  }

  render() {
    let geo = navigator.geolocation;
    function success(pos) {
      var crd = pos.coords;
      console.log(this);
      this.MapContainer.setState({ lat: crd.latitude });
      this.MapContainer.setState({ long: crd.longitude });

      console.log("Your current position is:");
      console.log(`Latitude : ${crd.latitude}`);
      console.log(`Longitude: ${crd.longitude}`);
      console.log(`More or less ${crd.accuracy} meters.`);
    }
    console.log(this.props.google);

    geo.getCurrentPosition(success);
    console.log("Hello?");

    return (
      <Map
        google={this.props.google}
        zoom={14}
        id="googleMap"
        style={style}
        initialCenter={{
          lat: this.state.lat,
          lng: this.state.long,
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
  apiKey: "AIzaSyCGFi8yGjUKqyOemc8Mtv1nQ3HCdxUV8E8",
})(MapContainer);
