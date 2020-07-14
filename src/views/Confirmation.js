import React from 'react';
import styles from './Confirmation.module.css';
import { Link } from 'react-router-dom';
import ConfirmationItemList from '../components/ConfirmationItemList';
import store from "../store";
import {fetchItems} from "../redux/confirmationActions";
import {connect} from "react-redux";
import {Spin} from "antd";

const mapStateToProps = (state) => {
    let items = state.confirmation.items;

    if(items.loading){
        return{
            loading: true
        }
    }

    else {
        let itemsData = items;

        return{
            items: itemsData,
            replacement: {},
        }
    }
};

const mapDispatchToProps = (dispatch) => {
    return{
        fetchItems: () => {dispatch(fetchItems())},
    }
};

class Confirmation extends React.Component {

    componentDidMount() {
        this.props.fetchItems();
    }

    render() {

        if(this.props.loading)
            return <Spin />;
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
                                // items={store.getState().confirmation.items}
                                items={this.props.items}
                            />
                        </div>

                        <div className={styles.replacement}>
                            <h2 className={styles.title}>Replacement</h2>
                            <div>
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

// export default Confirmation;
export default connect(mapStateToProps, mapDispatchToProps)(Confirmation);
