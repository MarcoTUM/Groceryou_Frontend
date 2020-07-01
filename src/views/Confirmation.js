import React from 'react';
import styles from './Confirmation.module.css';
import { Link } from 'react-router-dom';

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
                }
            }
        }
    }

    componentDidMount() {


        let itemNames = [];
        // console.log(this.state.mock_items)
        for(let item in this.state.mock_items)
            itemNames.push(this.state.mock_items[item].name);
        //     console.log(this.state.mock_items[item]);
        const nameList = itemNames.map((itemNames) =>
            <li>{itemNames}</li>
        );
        this.setState({
            nameList: nameList
        });
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
                            <div>
                                <ul>{this.state.nameList}</ul>
                                {/*<ul>*/}
                                {/*    <li>item1</li>*/}
                                {/*    <li>item2</li>*/}
                                {/*    <li>item3</li>*/}
                                {/*    <li>item4</li>*/}
                                {/*    <li>item5</li>*/}
                                {/*</ul>*/}
                            </div>
                        </div>

                        <div className={styles.replacement}>
                            <h2 className={styles.title}>Replacement</h2>
                        </div>
                    </div>
                    <div className={styles.backButtonContainer}>
                        <Link to='/AcceptRequest'>
                            <button>Back</button>
                        </Link>
                    </div>
                </div>
            </main>
        );
    }
}

export default Confirmation;
