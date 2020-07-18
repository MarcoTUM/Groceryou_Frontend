import React from "react";

import { connect } from "react-redux";
import { Spin } from "antd";


class RequestInformation extends React.Component {
  constructor(props) {
    super(props);

    // Set initial state
    this.state = {};
  }

  componentDidMount() {}

  render() {
    if (this.props.loading) return <Spin />;
    else {
    return (
        <div>
            requestID: {this.props.selectedRequestData._id}
            <br/>
            commission: {this.props.selectedRequestData.commission}
            <br/>
            desiredDeliveryTimeStart: 
            {new Date(this.props.selectedRequestData.desiredDeliveryTimeStart).toLocaleDateString("en-US")}
            {new Date(this.props.selectedRequestData.desiredDeliveryTimeStart).toLocaleTimeString("en-US")}
            <br/>
            desiredDeliveryTimeEnd: 
            {new Date(this.props.selectedRequestData.desiredDeliveryTimeEnd).toLocaleDateString("en-US")}
            {new Date(this.props.selectedRequestData.desiredDeliveryTimeEnd).toLocaleTimeString("en-US")}
            <br/>
            Name: {this.props.selectedRequestUserData.userData.name}
            <br/>
            Surname: {this.props.selectedRequestUserData.userData.surname}
            <br/>
            PhoneNumber: {this.props.selectedRequestUserData.userData.phoneNumber}
            <br/>
            Street: {this.props.selectedRequestUserData.userData.address.street}
            <br/>
            PLZ: {this.props.selectedRequestUserData.userData.address.PLZ}
            <br/>
            City: {this.props.selectedRequestUserData.userData.address.city}
            <br/>
            House Number: {this.props.selectedRequestUserData.userData.address.houseNr}
        </div>
    );
    }
  }
}

const mapStateToProps = (state, ownProps) => {
    let allRequests = state.acceptedRequests;
    let customersList = state.customersList;

  if (allRequests.loading || customersList.loading) {
    return {
      loading: true,
    };
  } else {

    // The data of the select request
    let selectedRequestData = {};

    // The data of the select request user
    let selectedRequestUserData = {};

    // Get all requests from the redux store
    let allRequestsData = allRequests.acceptedRequestsData;

    // Get all users from the redux store
    let allUsers = customersList.customersListData;

    // Filter the selected request
    for(let request of Object.values(allRequestsData)) {
        if(request._id === ownProps.requestID) {
            selectedRequestData = request;
        }
    }

    // Filter the selected request user
    for(let user of Object.values(allUsers)) {
        if(user._id === selectedRequestData.userID) {
            selectedRequestUserData = user;
        }
    }

    // Return the select request and user information
    return {
      loading: false,
      selectedRequestData: selectedRequestData,
      selectedRequestUserData: selectedRequestUserData
    };
  }
};

export default connect(mapStateToProps, this)(RequestInformation);