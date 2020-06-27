import React from 'react';
import { Row, Col, List, Card, Button} from 'antd';
import { Link } from 'react-router-dom';
import { SHOPS } from '../shared/shops';
import {gray, darkGreen, lightGreen} from '../shared/colors';
import { FieldTimeOutlined, BoldOutlined } from '@ant-design/icons';

const { Meta } = Card;

class ShopSelectionView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            location: props.location,
            shops: SHOPS,
            selectedShop: null,
            estimatedTime: null
        };
    }

    callback(key) {
        console.log(key);
    }

    getDeliveryTime(){
        //return parseInt(Math.random(), 10);
        return 120;
    }

    clickShop(item){
        this.setState({
            selectedShop: item,
            estimatedTime: this.getDeliveryTime()
            }
        )
        console.log(item);
    }

    render() {

        const shopList = ()=>{
            return (
                <div>
                <List
                bordered = {false}
                dataSource = {this.state.shops}
                renderItem={(item) => (
                    <Card  style={cardInListStyle} onClick={() => {this.clickShop(item)}}>
                        <Row gutter={{xs: 8, sm: 16}}>
                            <Col span={6}>
                                <img width="100%" alt="logo" src={item.image}/>
                            </Col>
                            <Col span={18}>
                            <Meta
                                title={item.location}
                                description={item.distance}
                            />
                            </Col>
                        </Row>
                    </Card>)}/>
                </div>
            );
        }

        const shopDetail = () => {
            return(
                <div style={shopDetailContainerStyle}>
                    <p style = {yellowBold}><FieldTimeOutlined /> Estimated Delivery Time </p>
                    {this.state.selectedShop?(<p style = {yellow}> {this.state.estimatedTime} Minutes</p>):''}
                    <p style = {yellowBold}>Minimum Order Price</p>
                    {this.state.selectedShop?(<p style = {yellow}> {this.state.selectedShop.minimumPrice} €</p>):''}
                    <p style = {{textAlign: 'right'}}>
                    <Button shape="round" style={{ background: "yellow", borderColor: 'yellow'}}>
                        Enter Shop
                    </Button>
                    </p>
                </div>
            );
        }

        const fakeMap = ()=> {
            return(
                <div>
                    <img width="100%" src="assets/images/fakemap.png"/>
                    </div>
            );
        }

        return (
            <main>
                <Row>
                    <Col span={0} md={5}  style={sideBarStyle}>
                        {shopList()}
                    </Col>
                    <Col span={24} md={14} >
                        {fakeMap()}
                    </Col>
                    <Col span={24} md={5}  style={sideBarStyle}>
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

export default ShopSelectionView;
