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
            location: props.location,
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

    clickShop(item){
        this.setState({
            selectedShop: item,
            estimatedTime: this.getDeliveryTime()
            }
        )
    }

    enterShop(){
        if(this.state.selectedShop!=null){
            this.props.setCurrentShop(this.state.selectedShop);
            this.props.history.push('/shop');
        }
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
                        <Card  key = {item._id} style={cardInListStyle} onClick={() => {this.clickShop(item)}}>
                            <Row gutter={{xs: 8, sm: 16}}>
                                <Col span={6}>
                                    <img width="100%" alt="logo" src={item.icon}/>
                                </Col>
                                <Col span={18}>
                                <Meta
                                    title={item.address.street + " " +  item.address.houseNr}
                                    description={this.getDistance() + 'm'}
                                />
                                </Col>
                            </Row>
                        </Card>)}/>
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
                    <Button shape="round" style={{ background: "yellow", borderColor: 'yellow'}} onClick={this.enterShop}>
                        Enter Shop
                    </Button>
                    </p>
                </div>
            );
        }

        return (

            

            <main>
                <Row>
                    <Col span={0} md={4}  style={sideBarStyle}>
                        {shopList()}
                    </Col>
                    <Col span={24} md={16} >
                        {this.props.shops.loading?<LoadingSpinner/>:<GrouceryouMap shops={this.props.shops.shops}/>}
                        
                    </Col>
                    <Col span={24} md={4}  style={sideBarStyle}>
                        {shopDetail()}
                    </Col>
                </Row>
            
                
          </main>
        );
    }
}

const sideBarStyle = {
    backgroundColor: darkGreen
};

const cardInListStyle = {
    borderRadius: 16,
    margin: 16
};

const shopDetailContainerStyle = {
    margin: 16
};

const yellowBold = {
    fontWeight: 'bold',
    color: 'yellow',
    textAlign:"left"
};

const yellow = {
    color: 'yellow',
    textAlign:"right"
}

export default connect(mapStateToProps, mapDispatchToProps)(ShopSelectionView);
