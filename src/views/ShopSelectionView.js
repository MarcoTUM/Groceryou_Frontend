import React from 'react';
import { Row, Col, List, Card, Button} from 'antd';
import { connect } from 'react-redux';
import {darkGreen} from '../shared/colors';
import {fetchShops} from '../redux/shopsOnMapActions';
import {setCurrentShop} from '../redux/currentShopActions';
import LoadingSpinner from '../components/LoadingSpinner';
import { FieldTimeOutlined, EuroOutlined } from '@ant-design/icons';
import GrouceryouMap from '../components/GrouceryouMap';


const { Meta } = Card;

const mapStateToProps = state => ({
    shops: state.shops,
    currentShop: state.currentShop
})

const mapDispatchToProps = (dispatch) => ({
    fetchShops: () => {dispatch(fetchShops())},
    setCurrentShop: (currentShop)=> {dispatch(setCurrentShop(currentShop))}
});

class ShopSelectionView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            location: props.location.state? props.location.state.detail:null,
            selectedShop: null,
            estimatedTime: null
        };
        this.enterShop = this.enterShop.bind(this);
    }

    componentDidMount(){
        this.props.fetchShops();
    }

    getDeliveryTime(){
        //return parseInt(Math.random(), 10);
        return 120;
    }

    getDistance(shopDistance){
        return 400;
    }

    clickShop(shop){
        this.setState({
            selectedShop: shop,
            estimatedTime: this.getDeliveryTime()
            }
        )
        this.refs.map.activateShopMarker(shop);
    }

    enterShop(){
        if(this.state.selectedShop!=null){
            this.props.setCurrentShop(this.state.selectedShop);
            this.props.history.push('/shop');
        }
    }

    handleClickShopMarker(shop){
        this.clickShop(shop);
    }

    

    render() {

        const shopList = ()=>{
            if(this.props.shops.loading){
                return(<LoadingSpinner/>);
            } else {
                return (
                    <div>
                    <List
                    bordered = {false}
                    dataSource = {this.props.shops.shops}
                    renderItem={(item) => (
                        
                        <Row key = {item._id} style={cardInListStyle} gutter={{xs: 0, sm: 4}} onClick={() => {this.clickShop(item)}}>
                            <Col span={6}>
                                <img width="100%" alt="logo" src={item.icon}/>
                            </Col>
                            <Col span={18}>
                            <Meta
                                title={item.address.street + " " +  item.address.houseNr}
                                description={this.getDistance() + 'm'}
                            />
                            </Col>
                        </Row>)}/>

                    </div>
                );
            }
        }

        const shopDetail = () => {
            return(
                <div style={shopDetailContainerStyle}>
                    <p style = {yellowBold}><FieldTimeOutlined /> Estimated Delivery Time </p>
                    {this.state.selectedShop?(<p style = {yellow}> {this.state.estimatedTime} Minutes</p>):''}
                    <p style = {yellowBold}><EuroOutlined/>Minimum Order Price</p>
                    {this.state.selectedShop?(<p style = {yellow}> {this.state.selectedShop.minimumPrice} €</p>):''}
                    <p style = {{textAlign: 'right'}}>
                    <Button type='primary' shape='rounded'  disabled={!this.state.selectedShop} style={buttonStyle} onClick={this.enterShop}>
                        Enter Shop
                    </Button>
                    </p>
                </div>
            );
        }

        return (

                <Row style={{ height: '85vh', overflow: "auto" }}>
                    <Col span={0} md={4}  style={sideBarStyle}>
                        {shopList()}
                    </Col>
                    <Col span={24} md={16} >
                        {this.props.shops.loading?<LoadingSpinner/>:
                        <GrouceryouMap
                            ref='map'
                            onClickShopMarker={(shop)=>this.handleClickShopMarker(shop)}
                            centerAddress={this.state.location} shops={this.props.shops.shops}/>}
                        
                    </Col>
                    <Col span={24} md={4}  style={sideBarStyle}>
                        {shopDetail()}
                    </Col>
                </Row>

        );
    }
}

const sideBarStyle = {
    backgroundColor: darkGreen
};

const buttonStyle = {
    borderRadius: '0.5rem',
    fontWeight: 'bold',
    color: 'black',
    backgroundColor:'#FDE100'
}

const cardInListStyle = {
    borderRadius: '0.5rem',
    backgroundColor: 'white',
    padding: '0.5rem',
    margin: '1rem'
};

const shopDetailContainerStyle = {
    margin: '1rem',
    textAlign: 'center'
};

const yellowBold = {
    fontWeight: 'bold',
    color: '#FFF5A2',
    textAlign:"left"
};

const yellow = {
    color: '#FFF5A2',
    textAlign:"right"
}

export default connect(mapStateToProps, mapDispatchToProps)(ShopSelectionView);
