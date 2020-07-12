import React from 'react';
import styles from "./AcceptRequestView.module.css"

import { connect } from 'react-redux';
import { fetchCurrentRequest, acceptCurrentRequest } from '../redux/currentRequestActions';
import { fetchAcceptedRequests } from '../redux/acceptedRequestActions';
import { fetchCustomers } from '../redux/customerActions';

import { IconContext } from "react-icons";
import { BsFillPersonFill, BsClock } from "react-icons/bs";
import { MdEuroSymbol, MdShoppingBasket } from "react-icons/md";

import RequestCard from '../components/RequestCard';
import UserService from "../services/UserService";
import Geocoder from "../services/GeocoderService";

import { Spin } from "antd";

import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import { Icon } from 'leaflet';

const redMarker = new Icon({
    iconUrl: require('../img/redMarker.png'),
    iconSize: [24, 41]
});

const mapStateToProps = (state) => {
    let currentRequest = state.currentRequest;
    let customersList = state.customersList;
    let acceptedRequests = state.acceptedRequests;

    if (currentRequest.loading || acceptedRequests.loading || customersList.loading) {
        return {
            loading: true
        }
    }
    else {
        let currentRequestData = currentRequest.currentRequestData;
        let acceptedRequestsData = acceptedRequests.acceptedRequestsData;
        let userData = customersList.customersListData["0"].userData;

        let currentRequestCourierId;
        if(currentRequestData.hasOwnProperty("courierID")) {
            currentRequestCourierId = currentRequestData.courierID;
        } else {
            currentRequestCourierId = undefined;
        }
        /*
        for(let request in acceptedRequestsData) {
            if(request.courierID === this.state.currentUserID) {

            }
        }
        */

        return {
            customerFullName: [userData.name, userData.surname].join(" "),
            customerSurname: userData.surname,
            phoneNumber: userData.phoneNumber,
            street: userData.address.street,
            PLZ: userData.address.PLZ,
            city: userData.address.city,
            houseNr: userData.address.houseNr,
            currentRequestId: currentRequestData._id,
            commission: currentRequestData.commission,
            amountOfItems: currentRequestData.itemList.length,
            currentRequestCourierId: currentRequestCourierId,
            desiredDeliveryTimeStart: currentRequestData.desiredDeliveryTimeStart,
            desiredDeliveryTimeEnd: currentRequestData.desiredDeliveryTimeEnd,
            acceptedRequest0: { id: acceptedRequestsData["0"]["_id"], userID: acceptedRequestsData["0"]["userID"] },
            acceptedRequest1: { id: acceptedRequestsData["1"]["_id"], userID: acceptedRequestsData["1"]["userID"] },
            acceptedRequest2: { id: acceptedRequestsData["2"]["_id"], userID: acceptedRequestsData["2"]["userID"] }
        }
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCurrentRequest: () => { dispatch(fetchCurrentRequest()) },
        fetchAcceptedRequests: () => { dispatch(fetchAcceptedRequests()) },
        fetchCustomers: () => { dispatch(fetchCustomers()) },
        acceptCurrentRequest: (RequestID, courierID) => {dispatch(acceptCurrentRequest(RequestID, courierID))}
    }
}

class AcceptRequestView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isAuthenticated: false,
            currentUserID: 0,
            isCourier: false
        };
    }

    componentDidMount() {
        this.setState({
            isAuthenticated: UserService.isAuthenticated(),
            currentUserID: UserService.getCurrentUser().id
        });
        UserService.isCourier()
        .then((response) => {
            this.setState({
                isCourier: response
            });
        })
        .catch((error) => {
            console.log(error);
        });

        this.props.fetchCurrentRequest();
        this.props.fetchAcceptedRequests();
        this.props.fetchCustomers();
        
        let latLong = {};
        Geocoder(3, "Boltzmannstraße", "Garching", 85748, "Deutschland")
        .then((response) => {
            latLong = response;
            console.log(latLong);
        })
        .catch((error) => {
            console.log(error);
        });
    }

    acceptCurrentRequest = () => {
        this.props.acceptCurrentRequest(this.props.currentRequestId, this.state.currentUserID);
    }

    render() {
        if (this.state.isAuthenticated && this.state.isCourier) {
            // If the page is still loading display a loading spinner
            if (this.props.loading)
                return <Spin />;
            else {
                let acceptRequestButton;
                console.log(this.props.currentRequestCourierId);
                if(this.props.currentRequestCourierId === undefined) {
                    acceptRequestButton =
                    <button 
                        className={styles.acceptButton} 
                        onClick={this.acceptCurrentRequest}>
                        Accept request
                    </button>;
                } else {
                    acceptRequestButton =
                    <div>
                        <br/>
                        <br/>
                        <p className={styles.alreadyAcceptedRequest}>Already accepted!</p>
                    </div>;
                }
                return (
                    <main>
                        <div className={styles.row}>
                            <div className={[styles.column, styles.left].join(" ")}>
                                <RequestCard customer={this.props.acceptedRequest0.userID} />
                                <RequestCard customer={this.props.acceptedRequest1.userID} />
                                <RequestCard customer={this.props.acceptedRequest2.userID} />
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
                                    <h3 className={styles.yellowText}><BsFillPersonFill /> {this.props.customerFullName}</h3>
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
                                {acceptRequestButton}
                            </div>
                        </div>
                    </main>
                );
            }
        }
        else if (this.state.isAuthenticated && !this.state.isCourier) {
            return (
                <main>
                    Only couriers are able to accept requests.
                </main>
            );
        }
        else {
            return (
                <main>
                    You need to login to view this page.
                </main>
            );
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AcceptRequestView);
