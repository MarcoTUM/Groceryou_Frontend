import React from 'react';
import { Map, Marker, Popup, TileLayer, withLeaflet } from 'react-leaflet';
//import { SearchControl, OpenStreetMapProvider } from 'react-leaflet-geosearch';
import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';
import Search from './GrouceryouMapSearch';
import { Icon } from 'leaflet';

import 'leaflet/dist/leaflet.css'; 

const redMarker = new Icon({
    iconUrl: require('../img/redMarker.png'),
    iconSize: [24, 41]
});

const provider = new OpenStreetMapProvider();

const searchControl = new GeoSearchControl({
    provider: provider,
});

class GrouceryouMap extends React.Component {

    constructor(props) {
        super(props);

        this.state={
            zoom:6,
            shops: this.props.shops,
            shopCoordinates: [{x:11.5345868, y:48.1209188}],
            requests: this.props.requests,
            home: this.props.home,
            center: [48.262473, 11.668891]
        }

        // search
    }

    componentDidMount(){
        this.updateShopCoordinates();
    }

    // async query a list of coordinates with given address, return the first coordinate as promise
    // note: using promise if vary important when updating array, because you want to wait until
    // all elements of array are updated (using promise), before invoking this.setState!
    async queryCoorByAddress(address){ //a function that returns a promise
        const addressString = address.street + ' ' + address.houseNr + ',' + address.postcode + ' ' + address.city;
        return Promise.resolve(
            provider.search({ query: addressString})
            .then((result)=>result[0])
        )
    }

    // query the coordinates of with addresses of shops, and THEN update state. Which will draw trigger the rendering
    // of the markers
    async updateShopCoordinates(){
        Promise.all(this.state.shops.map(item => this.queryCoorByAddress(item.address)))
        .then((data)=>this.setState({shopCoordinates: data})) 
    }

    render() {
        const shopMarkers = this.state.shopCoordinates.map((coor,index)=>{
            return(
                <Marker key={index} position={[coor.y, coor.x]} icon={redMarker}>
                    <Popup>This is the TUM.marker123<br />Best Uni ever!</Popup>
                </Marker>
            );
        });

        return (
           
            <Map center={this.state.center} zoom={this.state.zoom} zoomControl={true}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                />
                <Search/>
                {shopMarkers}
            </Map>
            
        );
    }
}

export default GrouceryouMap;