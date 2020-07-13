import React from 'react';
import styles from './Confirmation.module.css';
import { Link } from 'react-router-dom';
import ConfirmationItemList from '../components/ConfirmationItemList';
import store from "../store";
import {conf_init} from "../redux/confirmationActions";
import {confirm_state} from "../shared/confirmStates";

class Confirmation extends React.Component {
    constructor(props) {
        super(props);
        let items = [
            {
                name: "Apple",
                amount: 3,
                unitType:"",
                unitPrice: 0.5,
            },
            {
                name: "Toast",
                amount: 1,
                unitType:"",
                unitPrice: 1,
            },
            {
                name: "Pringles Onion",
                amount: 2,
                unitType:"",
                unitPrice: 4.5/2,
            },
            {
                name: "Pork Belly",
                amount: 500,
                unitType:"g",
                unitPrice: 3.5/500,
            },
        ];

        // this.state={
        //     items: items
        // };

        let key = 0;
        let state_items = items.map((item) => {return {
            key: key++,
            content: item,
            state: confirm_state.init
        }});

        store.dispatch(conf_init(state_items));

        this.state={
            items: state_items
        }
    }

    //get the actual items of the request from the previous state / db

    render() {
        return (
            <main>
                <div className={styles.content}>
                    <div className={styles.listContainer}>
                        <div className={styles.itemList}>
                            <h2 className={styles.title}>Item List</h2>
                            <div className={styles.itemListHeader}>
                                <div>
                                    <h2>Product</h2>
                                </div>
                                <div>
                                    <h2>Amount</h2>
                                </div>
                                <div>
                                    <h2>Price €</h2>
                                </div>
                                <div>
                                    <h2>Purchased</h2>
                                </div>
                            </div>
                            <ConfirmationItemList
                                items={store.getState().confirmation.items}
                            />
                        </div>

                        <div className={styles.replacement}>
                            <h2 className={styles.title}>Replacement</h2>
                            <div>
                                {/*have a list of items here*/}
                                <button className={styles.changeRequestButton}>Change Request</button>
                            </div>
                        </div>
                    </div>
                    <div className={styles.backButtonContainer}>
                        <Link to='/AcceptRequest'>
                            <button className={styles.backButton}>Back to map</button>
                        </Link>
                    </div>
                </div>
            </main>
        );
    }
}

export default Confirmation;
