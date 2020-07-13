import React from 'react';
import styles from './Confirmation.module.css';
import { Link } from 'react-router-dom';
import ConfirmationItemList from '../components/ConfirmationItemList';

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

        this.state={
            items: items
        };
    }

    //get the actual items of the request from the previous state / db

    render() {
        return (
            <main>
                <div class="content" className={styles.content}>
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
                                items={this.state.items}
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
