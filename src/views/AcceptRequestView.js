import React from 'react';
import axios from 'axios';
import NavBar from '../components/NavBar';
import SubNavBar from '../components/SubNavBar';
import styles from "./AcceptRequestView.module.css"

import { IconContext } from "react-icons";
import { BsFillPersonFill, BsClock } from "react-icons/bs";
import { MdEuroSymbol, MdShoppingBasket } from "react-icons/md";
import RequestCard from '../components/RequestCard';

class AcceptRequestView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            customer: "",
            gender: "",
            street: "",
            PLZ: -1,
            city: "",
            commission: -1,
            amountOfItems: -1,
            desiredDeliveryTimeStart: new Date(),
            desiredDeliveryTimeEnd: new Date(),
        };
    }

    componentDidMount() {
        axios.get('http://localhost:8080/customerRequest')
            .then(res => {
                if (res.data) {
                    // Index is the entryID in the database
                    let requestData = res.data[0];
                    console.log(requestData);
                    this.setState({
                        customer: requestData["name"],
                        gender: requestData["gender"],
                        street: requestData["street"],
                        PLZ: requestData["PLZ"],
                        city: requestData.city,
                        commission: requestData["commission"],
                        amountOfItems: requestData["amountOfItems"]
                    })
                }
            })
            .catch(error => console.log(error))
    }

    render() {
        return (
            <main>
                <NavBar />
                <SubNavBar />
                <div className={styles.row}>
                    <div className={[styles.column, styles.left].join(" ")}>
                        <RequestCard customer={this.state.customer} />
                        <RequestCard customer={this.state.customer} />
                        <RequestCard customer={this.state.customer} />
                    </div>
                    <div className={[styles.column, styles.middle].join(" ")}></div>
                    <div className={[styles.column, styles.right].join(" ")}>
                        <IconContext.Provider value={{ size: "1.5em", verticalAlign: 'middle' }}>
                            <h3 className={styles.yellowText}><BsFillPersonFill /> {this.state.customer}</h3>
                            {this.state.street}
                            <h3 className={styles.yellowText}><MdEuroSymbol /> Commission </h3>
                            {this.state.commission}€
                            <h3 className={styles.yellowText}><MdShoppingBasket /> Amount of items </h3>
                            {this.state.amountOfItems} items
                            <h3 className={styles.yellowText}><BsClock /> Desired delivery time </h3>
                            {this.state.desiredDeliveryTimeStart.toLocaleDateString()} &nbsp;
                            {this.state.desiredDeliveryTimeStart.toLocaleTimeString()} <br />
                            &#126; <br />
                            {this.state.desiredDeliveryTimeEnd.toLocaleDateString()} &nbsp;
                            {this.state.desiredDeliveryTimeEnd.toLocaleTimeString()}
                        </IconContext.Provider>
                        <button className={styles.acceptButton}>Accept request</button>
                    </div>
                </div>
            </main>
        );
    }
}

export default AcceptRequestView;