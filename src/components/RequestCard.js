import React from "react";
import { Link } from "react-router-dom";

import styles from "./RequestCard.module.css";

import { connect } from "react-redux";
import { fetchCurrentRequest } from "../redux/currentRequestActions";

import { Modal } from "antd";
import RequestInformation from '../components/RequestInformation';

class RequestCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false
    };
    this.handleConfirmationClick = this.handleConfirmationClick.bind(this);
  }

  handleConfirmationClick(requestID) {
    this.props.fetchCurrentRequest(requestID);
  };

  render() {
    return (
      <div className={styles.requestCard}>
        <h3 className={styles.requestCardText}>{this.props.customer}</h3>
        <div className={styles.requestCardButtonContainer}>
          <button
            className={styles.requestCardButton}
            onClick={this.showModal}
          >
            View details
          </button>
        </div>
        <Link to="confirmation" className={styles.requestCardButtonContainer}>
          <button
            className={styles.requestCardButton}
            onClick={() => this.handleConfirmationClick(this.props.requestID)}
          >
            Confirmation
          </button>
        </Link>
        <Modal
            title="Request Detail Information"
            visible={this.state.modalVisible}
            onOk={this.modalHandleOk}
            onCancel={this.modalHandleCancel}
            >
            <RequestInformation requestID={this.props.requestID} />
        </Modal>
      </div>
    );
  }

  modalHandleOk = () => {
      this.setState({
          modalVisible: false,
      });
  }

  modalHandleCancel = () => {
      this.setState({
          modalVisible: false,
      });
  }

  showModal = () => {
      this.setState({
          modalVisible: true,
      });
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCurrentRequest: (requestID) => {
      dispatch(fetchCurrentRequest(requestID));
    },
  };
};

export default connect(null, mapDispatchToProps)(RequestCard);
