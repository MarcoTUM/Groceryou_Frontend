import React from "react";

import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";

/* import { OpenStreetMapProvider } from "leaflet-geosearch"; */
import Geocoder from "../services/GeocoderService";

/* const provider = new OpenStreetMapProvider(); */

/*
const redMarker = new Icon({
  iconUrl: require("../img/redMarker.png"),
  iconSize: [24, 41],
});
*/

const blueMarker = new Icon({
  iconUrl: require("../img/blueMarker.png"),
  iconSize: [24, 41],
});

const greenMarker = new Icon({
  iconUrl: require("../img/greenMarker.png"),
  iconSize: [24, 41],
});

class RequestMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      zoom: 13,
      center: [48.262473, 11.668891],
      markers: [],
    };
    this.markers = this.geoCodeMarkers.bind(this);
  }

  async geoCodeMarkers() {
    let positions = [];

    // For each user's address
    for (let address of this.props.addresses) {
      // Get lat and long via Geocoder
      let pos = await Geocoder(
        address.houseNr,
        address.street,
        address.city,
        address.PLZ,
        "Deutschland"
      );
      // Push address, lat and long to positions array
      positions.push({
        address: address,
        latitude: pos.latitude,
        longitude: pos.longitude,
      });
    }

    // Container for the JSX maker code
    let markerJSX = [];

    // For each position
    for (let position of positions) {
      // Push a new marker to the JSX array
      markerJSX.push(
        <Marker
          position={[position.latitude, position.longitude]}
          icon={greenMarker}
          key={(markerJSX.length + 1)}
        >
          <Popup>
            {position.address.street} {position.address.houseNr}
            <br />
            {position.address.city} {position.address.PLZ}
          </Popup>
        </Marker>
      );
    }

    // Add a blue marker to the courier address
    console.log("this.props.courierAddress");
    console.log(this.props.courierAddress);

    let courierPos = await Geocoder(
      this.props.courierAddress.houseNr,
      this.props.courierAddress.street,
      this.props.courierAddress.city,
      this.props.courierAddress.PLZ,
      "Deutschland"
    );

    console.log("courierPos");
    console.log(courierPos);

    markerJSX.push(
      <Marker
        position={[courierPos.latitude, courierPos.longitude]}
        icon={blueMarker}
        key={0}
      >
        <Popup>
          {this.props.courierAddress.street} {this.props.courierAddress.houseNr}
          <br />
          {this.props.courierAddress.city} {this.props.courierAddress.PLZ}
        </Popup>
      </Marker>
    );


    return markerJSX;
  }

  componentDidMount() {
    this.geoCodeMarkers().then((res) => {
      this.setState({
        markers: res,
      });
    });
  }

  render() {
    return (
      <Map center={this.state.center} zoom={this.state.zoom}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {this.state.markers}
      </Map>
    );
  }
}

export default RequestMap;
