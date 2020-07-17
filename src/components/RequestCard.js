import React from 'react';
import { Link } from 'react-router-dom';

import styles from "./RequestCard.module.css"

class RequestCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    handleConfirmationClick(requestID) {
        window.localStorage.setItem("currentRequestId", requestID);
    };

    render() {
        return (
            <div className={styles.requestCard}>
                <h3 className={styles.requestCardText}>{this.props.customer}</h3>
                <div className={styles.requestCardButtonContainer}>
                    <button className={styles.requestCardButton}>View details</button>
                </div>
                <Link to='confirmation' className={styles.requestCardButtonContainer}>
                    <button
                        className={styles.requestCardButton}
                        onClick={() => this.handleConfirmationClick(this.props.requestID)}
                    >Confirmation</button>
                </Link>
            </div>
        );
    }
}

export default RequestCard;
