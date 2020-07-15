import { Component } from "react";
import L from "leaflet";
import * as ELG from "esri-leaflet-geocoder";
import 'esri-leaflet-geocoder/dist/esri-leaflet-geocoder.css';

class GeoSearchBar extends Component {
  componentDidMount() {
    //const map = this.props.leaflet.map;
    const searchControl = new ELG.Geosearch();
    //const results = new L.LayerGroup().addTo(map);

    searchControl.on("results", function(data) {
      //results.clearLayers();
      //for (let i = data.results.length - 1; i >= 0; i--) {
      //  results.addLayer(L.marker(data.results[i].latlng));
      //}
    });
  }

  render() {
    return null;
  }
}

//export default Search;
export default GeoSearchBar;