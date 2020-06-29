import React from 'react';
import axios from 'axios';
import styles from "./AcceptRequestView.module.css"

import { connect } from 'react-redux';
import { fetchCurrentRequest } from '../redux/currentRequestActions';
import { fetchAcceptedRequests } from '../redux/acceptedRequestActions';

import { IconContext } from "react-icons";
import { BsFillPersonFill, BsClock } from "react-icons/bs";
import { MdEuroSymbol, MdShoppingBasket } from "react-icons/md";
import RequestCard from '../components/RequestCard';

import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import { Icon } from 'leaflet';

const redMarker = new Icon({
    iconUrl: require('../img/redMarker.png'),
    iconSize: [24, 41]
});

const mapStateToProps = (state) => {
    let data = state.currentRequest;
    return {
        customerFullName: [data.name, data.surname].join(" "),
        customerSurname: data.surname,
        gender: data.gender,
        street: data.street,
        PLZ: data.PLZ,
        city: data.city,
        commission: data.commission,
        amountOfItems: data.amountOfItems,
        desiredDeliveryTimeStart: data.desiredDeliveryTimeStart,
        desiredDeliveryTimeEnd: data.desiredDeliveryTimeEnd
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCurrentRequest: () => { dispatch(fetchCurrentRequest()) },
        fetchAcceptedRequests: () => { dispatch(fetchAcceptedRequests()) }
    }
}

class AcceptRequestView extends React.Component {
    /*
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    */

    getMrMs() {
        if (this.props.gender === "male")
            return "Mr. ";
        else if (this.props.gender === "female")
            return "Ms. ";
        else
            return "";
    }

    componentDidMount() {
        this.props.fetchCurrentRequest();
        this.props.fetchAcceptedRequests();
    }

    render() {
        return (
            <main>
                <div className={styles.row}>
                    <div className={[styles.column, styles.left].join(" ")}>
                        <RequestCard customer={this.getMrMs() + this.props.customerSurname} />
                        <RequestCard customer={this.getMrMs() + this.props.customerSurname} />
                        <RequestCard customer={this.getMrMs() + this.props.customerSurname} />
                    </div>
                    <div className={[styles.column, styles.middle].join(" ")}>
                        <Map center={[48.262473, 11.668891]} zoom={13}>
                            <TileLayer
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                            />
                            <Marker position={[48.262473, 11.668891]} icon={redMarker}>
                                <Popup>This is the TUM.<br />Best Uni ever!</Popup>
                            </Marker>
                        </Map>
                    </div>
                    <div className={[styles.column, styles.right].join(" ")}>
                        <IconContext.Provider value={{ size: "1.5em", verticalAlign: 'middle' }}>
                            <h3 className={styles.yellowText}><BsFillPersonFill /> {this.getMrMs()} {this.props.customerFullName}</h3>
                            {this.props.street}
                            <h3 className={styles.yellowText}><MdEuroSymbol /> Commission </h3>
                            {this.props.commission}€
                            <h3 className={styles.yellowText}><MdShoppingBasket /> Amount of items </h3>
                            {this.props.amountOfItems} items
                            <h3 className={styles.yellowText}><BsClock /> Desired delivery time </h3>
                            {new Date(this.props.desiredDeliveryTimeStart).toLocaleDateString("en-US")} &nbsp;
                            {new Date(this.props.desiredDeliveryTimeStart).toLocaleTimeString("en-US")} <br />
                            &#126; <br />
                            {new Date(this.props.desiredDeliveryTimeEnd).toLocaleDateString("en-US")} &nbsp;
                            {new Date(this.props.desiredDeliveryTimeEnd).toLocaleTimeString("en-US")}
                        </IconContext.Provider>
                        <button className={styles.acceptButton}>Accept request</button>
                    </div>
                </div>
            </main>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AcceptRequestView);
