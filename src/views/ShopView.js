import React from 'react';
import NavBar from '../components/NavBar';
import ShoppingPage from '../components/ShoppingPage';
import { Row, Col, List, Card, Button} from 'antd';
class HomeView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };


    }
    
      

    render(){

        const shop_Section = ()=>{
            return(
                <div>
                    <img src="assets/images/ShopVege2.svg"/>
                </div>
            );
        }  
        return (
            <div>
                
                <NavBar />
                <Row>
                    <Col span={4}>
                    </Col>
                    <Col span={16}>
                    {shop_Section()}
                    </Col>
                    <Col span={4}>
                    </Col>
                </Row>
            </div>
        );
    }


}

export default HomeView;