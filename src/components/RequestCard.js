import React from "react";
import { Link } from "react-router-dom";

import styles from "./RequestCard.module.css";

import { connect } from "react-redux";
import { fetchCurrentRequest } from "../redux/currentRequestActions";

class RequestCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  buttonOnClick(requestID) {
    this.props.fetchCurrentRequest(requestID);
  }

  render() {
    return (
      <div className={styles.requestCard}>
        <h3 className={styles.requestCardText}>{this.props.customer}</h3>
        <div className={styles.requestCardButtonContainer}>
          <button className={styles.requestCardButton}>View details</button>
        </div>
        <Link to="confirmation" className={styles.requestCardButtonContainer}>
          <button
            className={styles.requestCardButton}
            onClick={() => this.buttonOnClick(this.props.requestID)}
          >
            Confirmation
          </button>
        </Link>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCurrentRequest: (requestID) => {
      dispatch(fetchCurrentRequest(requestID));
    },
  };
};

export default connect(null, mapDispatchToProps)(RequestCard);
