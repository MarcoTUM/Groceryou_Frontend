import React from 'react';
import styles from './Confirmation.module.css';
import { Link } from 'react-router-dom';
import ConfirmationItemList from '../components/ConfirmationItemList';

class Confirmation extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            mock_items: {
                apple: {
                    name: 'Apple',
                    amount: 3,
                    unitPrice: 0.5
                },
                toast: {
                    name: 'Toast',
                    amount: 1,
                    unitPrice: 1
                },
                pringlesOnion: {
                    name: "Pringles Onion",
                    amount: 2,
                    unitPrice: 2.25
                },
                bioEggs10Pack: {
                    name: "Bio Eggs 10 pack",
                    amount: 2,
                    unitPrice: 2.75
                },
                porkBelly: {
                    name: "Pork Belly",
                    amount: 500,
                    amountType:"gram",
                    unitPrice: 0.007
                },
                apple1: {
                    name: 'Apple',
                    amount: 3,
                    unitPrice: 0.5
                },
                toast2: {
                    name: 'Toast',
                    amount: 1,
                    unitPrice: 1
                },
                pringlesOnion2: {
                    name: "Pringles Onion",
                    amount: 2,
                    unitPrice: 2.25
                },
                bioEggs10Pack2: {
                    name: "Bio Eggs 10 pack",
                    amount: 2,
                    unitPrice: 2.75
                },
                porkBelly2: {
                    name: "Pork Belly",
                    amount: 500,
                    amountType:"gram",
                    unitPrice: 0.007
                },
                apple3: {
                    name: 'Apple',
                    amount: 3,
                    unitPrice: 0.5
                },
                toast3: {
                    name: 'Toast',
                    amount: 1,
                    unitPrice: 1
                },
                pringlesOnion3: {
                    name: "Pringles Onion",
                    amount: 2,
                    unitPrice: 2.25
                },
                bioEggs10Pack3: {
                    name: "Bio Eggs 10 pack",
                    amount: 2,
                    unitPrice: 2.75
                },
                porkBelly4: {
                    name: "Pork Belly",
                    amount: 500,
                    amountType:"gram",
                    unitPrice: 0.007
                },
                porkBelly5: {
                    name: "Pork Belly",
                    amount: 500,
                    amountType:"gram",
                    unitPrice: 0.007
                },
                porkBelly6: {
                    name: "Pork Belly",
                    amount: 500,
                    amountType:"gram",
                    unitPrice: 0.007
                },
                porkBelly7: {
                    name: "Pork Belly",
                    amount: 500,
                    amountType:"gram",
                    unitPrice: 0.007
                },
                porkBelly8: {
                    name: "Pork Belly",
                    amount: 500,
                    amountType:"gram",
                    unitPrice: 0.007
                },
                porkBelly9: {
                    name: "Pork Belly",
                    amount: 500,
                    amountType:"gram",
                    unitPrice: 0.007
                },
            }
        }
    }

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
                                    <h2>Price</h2>
                                </div>
                                <div>
                                    <h2>Purchased</h2>
                                </div>
                            </div>
                            <ConfirmationItemList
                                items={this.state.mock_items}
                            />
                        </div>

                        <div className={styles.replacement}>
                            <h2 className={styles.title}>Replacement</h2>
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
