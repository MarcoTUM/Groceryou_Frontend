import React from 'react';
import NavBar from '../components/NavBar';
import SubNavBar from '../components/SubNavBar';
import styles from "./ShopperView.module.css"

import { IconContext } from "react-icons";
import { BsFillPersonFill, BsClock } from "react-icons/bs";
import { MdEuroSymbol, MdShoppingBasket } from "react-icons/md";

class ShopperView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            customer: "",
            gender: "",
            street: "",
            PLZ: 0,
            city: "",
            commission: 0,
            amountOfItems: 0,
            desiredDeliveryTimeStart: null,
            desiredDeliveryTimeEnd: null,
        };
    }

    static getDerivedStateFromProps(props, state) {
        // TODO: Get data from database
        let customerGender = "male";
        let customerName = "Hofstadter";

        // Set the correct title depending on the customer gender
        if (customerGender === "male") {
            customerName = "Mr. " + customerName;
        } else if (customerGender === "female") {
            customerName = "Ms. " + customerName;
        }

        // TODO: Get data from database
        return {
            customer: customerName,
            gender: customerGender,
            street: "Lindenschmitstraße 8",
            PLZ: 80302,
            city: "Munich",
            commission: 5,
            amountOfItems: 15,
            desiredDeliveryTimeStart: new Date(2020, 6, 24, 10, 15),
            desiredDeliveryTimeEnd: new Date(2020, 6, 24, 10, 45),
        };
    }

    render() {
        return (
            <main>
                <NavBar />
                <SubNavBar />
                <div className={styles.row}>
                    <div className={[styles.column, styles.left].join(" ")}></div>
                    <div className={[styles.column, styles.middle].join(" ")}></div>
                    <div className={[styles.column, styles.right].join(" ")}>
                        <IconContext.Provider value={{ size: "1.5em", verticalAlign: 'middle' }}>
                            <h3><BsFillPersonFill /> {this.state.customer}</h3>
                            {this.state.street}
                            <h3><MdEuroSymbol /> Commission </h3>
                            {this.state.commission}€
                            <h3><MdShoppingBasket /> Amount of items </h3>
                            {this.state.amountOfItems} items
                            <h3><BsClock /> Desired delivery time </h3>
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

export default ShopperView;