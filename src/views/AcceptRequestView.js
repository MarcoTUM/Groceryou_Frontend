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

import { Spin } from "antd";

import RequestMap from '../components/RequestMap';

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
        // Get current request from the redux store
        let currentRequestData = currentRequest.currentRequestData;

        // Get all requests from the redux store
        let allRequestsData = acceptedRequests.acceptedRequestsData;

        // Get all users from the redux store
        let allUsers = customersList.customersListData;

        // Get the courierID of the current request
        let currentRequestCourierId;
        if(currentRequestData.hasOwnProperty("courierID")) {
            currentRequestCourierId = currentRequestData.courierID;
        } else {
            currentRequestCourierId = undefined;
        }

        // Get the 3 accepted requests
        let accepted3Requests = [];

        // For every request
        for(let request of Object.values(allRequestsData)) {
            // Check if courierID is set
            if(request.hasOwnProperty("courierID")) {
                // Check if courierID is equal to the current user id
                if(request.courierID === UserService.getCurrentUser().id) {
                    // Fo each user
                    for(let user of Object.values(allUsers)) {
                        // Check if userID is equal to the request's userID
                        if(user._id === request.userID) {
                            // Save the important information in an array
                            let req = {
                                requestID: request._id,
                                userName: user.userData.name,
                                userSurname: user.userData.surname
                            };
                            accepted3Requests.push(req);
                        }
                    }  
                }
            }
        }

        // Get the addresses of all requests
        let requestAddresses = [];

        // For every request
        for(let request of Object.values(allRequestsData)) {
            // Fo each user
            for(let user of Object.values(allUsers)) {
                // Check if userID is equal to the request's userID
                if(user._id === request.userID) {
                    // Save the user address
                    requestAddresses.push(user.userData.address);
                }
            } 
        }

        // TODO: Replace with map clicks
        allUsers = customersList.customersListData["0"].userData;

        // Return the information into the properties
        return {
            customerFullName: [allUsers.name, allUsers.surname].join(" "),
            customerSurname: allUsers.surname,
            phoneNumber: allUsers.phoneNumber,
            street: allUsers.address.street,
            PLZ: allUsers.address.PLZ,
            city: allUsers.address.city,
            houseNr: allUsers.address.houseNr,
            currentRequestId: currentRequestData._id,
            commission: currentRequestData.commission,
            amountOfItems: currentRequestData.itemList.length,
            currentRequestCourierId: currentRequestCourierId,
            desiredDeliveryTimeStart: currentRequestData.desiredDeliveryTimeStart,
            desiredDeliveryTimeEnd: currentRequestData.desiredDeliveryTimeEnd,
            accepted3Requests: accepted3Requests,
            requestAddresses: requestAddresses
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
        // Call constructor of superclass
        super(props);

        // Set initial state
        this.state = {
            isAuthenticated: false,
            currentUserID: 0,
            isCourier: false
        };

        // To be on the save side bind this-Pointer to function
        this.acceptRequestButton = this.acceptRequestButton.bind(this);
    }

    componentDidMount() {
        // Get authentication data
        this.setState({
            isAuthenticated: UserService.isAuthenticated(),
            currentUserID: UserService.getCurrentUser().id
        });

        // Check if logged in user is a courier
        UserService.isCourier()
        .then((response) => {
            this.setState({
                isCourier: response
            });
        })
        .catch((error) => {
            console.log(error);
        });

        // Fetch data from redux store
        this.props.fetchCurrentRequest();
        this.props.fetchAcceptedRequests();
        this.props.fetchCustomers();
    }

    acceptCurrentRequest = () => {
        // Accept the current request by adding courierID to the request in the database
        this.props.acceptCurrentRequest(this.props.currentRequestId, this.state.currentUserID);
    }

    acceptRequestButton() {
        // Check whether or not the current selected request was already accepted
        if(this.props.currentRequestCourierId === undefined) {
            return (
                <button 
                    className={styles.acceptButton} 
                    onClick={this.acceptCurrentRequest}>
                    Accept request
                </button>
            );
        } else {
            return (
                <div>
                    <br/>
                    <br/>
                    <p className={styles.alreadyAcceptedRequest}>Already accepted!</p>
                </div>
            );
        }
    }

    render() {
        // Check if the user is logged in and if the user is a courier
        if (this.state.isAuthenticated && this.state.isCourier) {
            // If the page is still loading display a loading spinner
            if (this.props.loading)
                return <Spin />;
            // Else display the courier accept request view
            else {
                // Get the current state of the accept request button
                let acceptRequestButton = this.acceptRequestButton();

                // Generate the request cards of the already accepted requests
                let requestCards = [];
                for(let request of this.props.accepted3Requests) {
                    requestCards.push(<RequestCard key={request.requestID} customer={[request.userName, request.userSurname].join(" ")} />);
                }

                // Return the JSX code
                return (
                    <main>
                        <div className={styles.row}>
                            <div className={[styles.column, styles.left].join(" ")}>
                                {requestCards}
                            </div>
                            <div className={[styles.column, styles.middle].join(" ")}>
                                <RequestMap addresses={this.props.requestAddresses} />
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
