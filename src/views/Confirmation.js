import React from 'react';
import styles from './Confirmation.module.css';
import { Link } from 'react-router-dom';
import ConfirmationItemList from '../components/ConfirmationItemList';
import store from "../store";
import {fetchItems} from "../redux/confirmationActions";
import {connect} from "react-redux";
import {Spin, Modal} from "antd";

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

    state = { visible: false };

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };


    render() {

        if(this.props.loading)
            return <Spin />;
        return (
            <main>

                <Modal
                    title="Basic Modal"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}>
                    <h2>STUFF</h2>
                </Modal>

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
                                showModal={this.showModal}
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
                        <button
                            className={styles.abortButton}>
                            Abort
                        </button>
                        <button
                            className={styles.deliverButton}>
                            Deliver
                        </button>
                    </div>
                </div>
            </main>
        );
    }
}

// export default Confirmation;
export default connect(mapStateToProps, mapDispatchToProps)(Confirmation);
