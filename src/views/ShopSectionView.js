import React from 'react';
import NavBar from '../components/NavBar';
import ShoppingPage from '../components/ShoppingPage';
import './ShopSectionView.css';
import { Row, Col, List, Card, Button} from 'antd';
import { Link } from 'react-router-dom';
import { SHOPS } from '../shared/shops';
import {gray, darkGreen, lightGreen} from '../shared/colors';

const { Meta } = Card;
class HomeView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            location: props.location,
            shops: SHOPS,
        };


    }
    
    ShopClicked(){
        console.log("shop vege clicked");
    }
      

    render(){

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

        const shop_Section = ()=>{
            return(
                <div>
                    <div className="Section4" onClick={this.ShopClicked}>
                    <img src="assets/images/ShopDrink.svg"/>
                    </div>
                    <div className="Section2" onClick={this.ShopClicked}>
                    <Link to = "/">
                    <img src="assets/images/ShopFreezer.svg"/>
                    </Link>
                    </div>
                    <div className="Section" onClick={this.ShopClicked}>
                    <img src="assets/images/ShopVegetable.svg"/>
                    </div>
                    <div className="Section3" onClick={this.ShopClicked}>
                    <img src="assets/images/ShopCash.svg"/>
                    </div>
                </div>
            );
        }  
        return (
            <div>
                
                <NavBar />
                <Row>
                <Col span={4}>
                    <div className="SidePanel">
                    side panel
                    </div>
                    </Col>
                    <Col span={16}>
                    {shop_Section()}
                    </Col>
                    <Col span={4}>
                    <div className="SidePanel2">
                    side panel 2
                    </div>
                    </Col>
                </Row>
            </div>
        );
    }


}

const cardInListStyle = {
    borderRadius: 16,
    margin: 16
};

export default HomeView;