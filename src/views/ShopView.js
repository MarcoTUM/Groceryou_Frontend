import React from 'react';
import NavBar from '../components/NavBar';
import ShoppingPage from '../components/ShoppingPage';
import './ShopView.css';
import { Row, Col, List, Card, Button} from 'antd';
import { Link } from 'react-router-dom';

class HomeView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };


    }
    
    ShopClicked(){
        console.log("shop vege clicked");
    }
      

    render(){

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
                    <Col span={4} >
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

export default HomeView;