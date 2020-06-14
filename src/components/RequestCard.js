import React from 'react';

import styles from "./RequestCard.module.css"

class RequestCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div className={styles.requestCard}>
                <h3 className={styles.requestCardText}>{this.props.customer}</h3>
                <button className={styles.requestCardButton}>View details</button>
                <button className={styles.requestCardButton}>Confirmation</button>
            </div>
        );
    }
}

export default RequestCard;