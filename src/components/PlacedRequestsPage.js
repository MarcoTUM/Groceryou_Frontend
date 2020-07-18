import React from "react";
import './PlacedRequestsPage.css';
import { fetchPlacedRequests } from "../redux/placedRequestsActions";
import { connect } from 'react-redux';
import {List, Row, Col} from 'antd';
import moment from 'moment';
import LoadingSpinner from './LoadingSpinner';
import UserService from "../services/UserService";

const mapStateToProps = state => ({
    requests: state.placedRequests,
})

const mapDispatchToProps = (dispatch) => ({
    fetchRequests: (userId) => {dispatch(fetchPlacedRequests(userId))},
});

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
                            <div className={item.hasOwnProperty('courierID')?'acceptedItem':'waitingItem'}>
                            <h3>{'delivery time: ' + moment(item.desiredDeliveryTimeStart).format('MMMM Do YYYY, h:mm a')}</h3>
                            <h4>{'commission: ' + item.commission + '€'}</h4>
                            </div>
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
