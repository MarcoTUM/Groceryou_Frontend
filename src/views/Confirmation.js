import React from 'react';
import styles from './Confirmation.module.css';
import { Link } from 'react-router-dom';
import ConfirmationItemList from '../components/ConfirmationItemList';
import store from "../store";
import {conf_replace, fetchItems} from "../redux/confirmationActions";
import {connect} from "react-redux";
import {Spin, Modal, Form, Input, InputNumber} from "antd";
import {preventDefault} from "leaflet/src/dom/DomEvent";
import ReplacementList from '../components/ReplacementList'
import SmsService from "../services/SmsService";

const mapStateToProps = (state) => {
    let items = state.confirmation.items;
    let replacements = state.confirmation.replacements;

    if(items.loading){
        return{
            loading: true
        }
    }

    else {
        let itemsData = items;
        let replacementsData = replacements;

        return{
            items: itemsData,
            replacement: replacementsData,
        }
    }
};

const mapDispatchToProps = (dispatch) => {
    return{
        fetchItems: () => {dispatch(fetchItems(window.localStorage.getItem("currentRequestId")))},
    }
};

class Confirmation extends React.Component {

    componentDidMount() {
        this.props.fetchItems();
    }

    state = {
        visible: false,
        replace:{
            name:'',
            qty:0,
            price:0,
        }
    };

    showModal = (id) => {
        this.setState({
            visible: true,
            currentId: id
        });
    };

    handleOk = e => {
        preventDefault(e);
        store.dispatch(conf_replace(
            this.state.currentId,
            this.state.replace
        ));
        this.setState({
            visible: false,
        });
    };

    handleCancel = e => {
        this.setState({
            visible: false,
        });
    };

    sendConfirmationSms(content) {
        SmsService.sendConfirmation(content)
            .then(() => {alert("Sms sent");})
            .catch((e) => {alert("Sms issue: " + e)});
    };


    render() {

        if(this.props.loading)
            return <Spin />;
        return (
            <main>

                <Modal
                    title="Replacement offer"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}>
                    <h2>Enter Replacement name, quantity, price</h2>
                    <Form>
                        <Form.Item
                            label="Name"
                            name="name"
                            rules={[
                                {
                                    required: true,
                                    message: "Please enter the name"
                                }
                            ]}
                        >
                            <Input
                                value={this.state.replace.name}
                                onChange={e => {
                                    let replace = {...this.state.replace};
                                    replace.name=e.target.value;
                                    this.setState({
                                        replace: replace
                                    })
                                }}
                                aria-errormessage={"Name is required"}
                            />
                        </Form.Item>
                        <Form.Item
                            label="Quantity"
                            name="quantity"
                            rules={[
                                {
                                    required: true,
                                    message: "Please enter the quantity"
                                }
                            ]}
                        >
                            <InputNumber
                                min={0}
                                value={this.state.replace.qty}
                                onChange={ e => {
                                    let replace ={...this.state.replace};
                                    replace.qty = e;
                                    this.setState({
                                        replace: replace
                                    })
                                }}
                            />
                        </Form.Item>
                        <Form.Item
                            label="Price"
                            name="price"
                            rules={[
                                {
                                    required: true,
                                    message: "Please enter the price"
                                }
                            ]}
                        >
                            <InputNumber
                                defaultValue={0}
                                value={this.state.replace.price}
                                formatter={value => `€ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                min={0}
                                onChange={e => {
                                    let replace ={...this.state.replace};
                                    replace.price = e
                                    this.setState({
                                        replace: replace
                                    })
                                }}
                            />
                        </Form.Item>
                    </Form>
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
                                items={this.props.items}
                                showModal={this.showModal}
                            />
                        </div>

                        <div className={styles.replacement}>
                            <h2 className={styles.title}>Replacement</h2>
                            <div>
                                <ReplacementList
                                    replacements={this.props.replacement}
                                />
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
                            className={styles.deliverButton}
                            onClick={() => {this.sendConfirmationSms({
                                number: 'dummyPhoneNumberValue',
                                replacements: this.props
                            })}}
                        >
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
