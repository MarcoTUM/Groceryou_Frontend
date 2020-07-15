import React from 'react';
import { Map, Marker, Popup, TileLayer} from 'react-leaflet';
import { OpenStreetMapProvider } from 'leaflet-geosearch';
import Search from './GrouceryouMapSearch';
import { Icon } from 'leaflet';

import 'leaflet/dist/leaflet.css'; 

const redMarker = new Icon({
    iconUrl: require('../img/redMarker.png'),
    iconSize: [24, 41]
});

const provider = new OpenStreetMapProvider();


class GrouceryouMap extends React.Component {

    constructor(props) {
        super(props);

        this.state={
            zoom:16,
            shops: this.props.shops,
            shopWithCoordinates: [{shop:{name:'default'}, coordinate:{x: 11.668891,y:48.262473, label: 'default label'}}],//[{shop: {name: 'default'}, coor: [48.1209188, 11.5345868]}],
            markers:[{description: 'default', coor: [48.262473, 11.668891] }],
            requests: this.props.requests,
            home: this.props.home,
            center: {y: 48.262473,
                    x: 11.668891,
                    label: 'map center'}
        }

        // search

        this.activateShopMarker = this.activateShopMarker.bind(this);
    }

    componentDidMount(){
        this.updateShopCoordinates();
        this.initialCenterWithAddress();
    }

    initialCenterWithAddress(){
        if(this.props.centerAddress){
            const centerAddress = this.props.centerAddress;
            provider.search({ query: centerAddress})
            .then((result)=>{
                this.setState({center: {y: result[0].y,
                                        x: result[0].x,
                                        label: 'map center'}
                                }
                            )
            })
        }
    }

    handleClickShopMarker(marker){
        this.setState({center: marker.coordinate});
        //this.refs.map.panTo(new L.LatLng(marker.coordinate.y, marker.coordinate.x));
        this.props.onClickShopMarker(marker.shop);
    }

    activateShopMarker(shop){
        const marker = this.state.shopWithCoordinates.filter(marker => {
            return marker.shop.id==shop.id
        });
        this.setState({center: marker[0].coordinate});
    }

    // async query a list of coordinates with given address, return the first coordinate as promise
    // note: using promise if vary important when updating array, because you want to wait until
    // all elements of array are updated (using promise), before invoking this.setState!
    async queryCoorByShop(shop){ //a function that returns a promise
        const address = shop.address;
        const addressString = address.street + ' ' + address.houseNr + ',' + address.postcode + ' ' + address.city;
        return Promise.resolve(
            provider.search({ query: addressString})
            .then(result => {
                let shopData = {
                    shop: shop,
                    coordinate: result[0]
                }
                return shopData;
            })
        )
    }

    // query the coordinates of with addresses of shops, and THEN update state. Which will draw trigger the rendering
    // of the markers
    async updateShopCoordinates(){
        Promise.all(
            this.state.shops.map(shop => this.queryCoorByShop(shop))
        )
        .then(data=>{
            this.setState({shopWithCoordinates: data});
        })
    }

    render() {
        const shopMarkers = this.state.shopWithCoordinates.map((marker,index)=>{
            return(
                <Marker ref='map' key={index} position={[marker.coordinate.y, marker.coordinate.x]} icon={redMarker} onclick={()=>this.handleClickShopMarker(marker)}>
                    <Popup> {marker.coordinate.label}</Popup>
                </Marker>
            );
        });

        return (
           
            <Map ref='map' center={[this.state.center.y, this.state.center.x]} zoom={this.state.zoom} zoomControl={true}>
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