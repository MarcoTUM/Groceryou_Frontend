import React from "react";
import './PlacedRequestsPage.css';
import { fetchPlacedRequests } from "../redux/placedRequestsActions";
import { connect } from 'react-redux';
import {List, Row, Col, Card} from 'antd';
import LoadingSpinner from './LoadingSpinner';
import UserService from "../services/UserService";

const mapStateToProps = state => ({
    requests: state.placedRequests,
})

const mapDispatchToProps = (dispatch) => ({
    fetchRequests: (userId) => {dispatch(fetchPlacedRequests(userId))},
});

const { Meta } = Card;

class PlacedRequestsPage extends React.Component {
    constructor(){
        super();
        
        this.checkAuthentication = this.checkAuthentication.bind(this);
        this.checkAuthentication();
    }

    componentDidMount(){
        const user = UserService.getCurrentUser();
        this.props.fetchRequests(user.id);
    }

    checkAuthentication(){
        let isLoggedIn = UserService.isAuthenticated();
        if(!isLoggedIn){
            this.props.history.push('/login');
        }
    }

    render() {

        const requestList = ()=>{
            if(this.props.requests.loading){
                return(<LoadingSpinner/>);
            } else {
                return (
                    <List
                    gutter={8}
                    bordered = {false}
                    dataSource = {this.props.requests.data}
                    renderItem={(item) => (
                        <List.Item className={item.hasOwnProperty('courierID')?'accepted':'waiting'} extra={item.hasOwnProperty('courierID')?'accepted':'waiting'}>
                            <List.Item.Meta
                                title={'delivery time: ' + item.desiredDeliveryTimeStart}
                                description={'commission: ' + item.commission}
                            />

                            </List.Item>
                        
                        )}/>
                    
                );
            }
        }


        return (
        <div className='main'>
            <h3>your Orders</h3>
            <Row>
                <Col span={24} md={12}>
                {requestList()}
                </Col>
            </Row>
        </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlacedRequestsPage);
