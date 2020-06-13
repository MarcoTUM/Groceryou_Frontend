import React from 'react';
import NavBar from '../components/NavBar';
import SubNavBar from '../components/SubNavBar';
import {Row, Col, InputGroup, Button, Card} from 'antd';
import Logo from '../img/GroceryouLogo.png';
import { Input } from 'antd';
import { darkGreen, lightGreen } from '../shared/colors';

const { Meta } = Card;

class HomeView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            location:''
        };

        this.enterShop = this.enterShop.bind(this);
        this.updateLocation = this.updateLocation.bind(this)
    }

    updateLocation(e) {
        this.setState({
          location: e.target.value
        });
      }

    enterShop(){
        this.props.history.push('/shop');
        console.log(this.state.location);
    }

    render() {

        const enterLocationBlock = () => {
            return (
                <Row  >
                    <Col span={24} >
                    <div style={{...blockContainer, ...locationBlock}} align="middle" justify="middle">
                        <div>
                        <p style={whiteBold}>We deliver your groceries from strores nearby your home</p>
                        <Input.Group compact>
                        <Input placeholder="Please enter your address" style={{ width: '500px' }} onChange={this.updateLocation}/>
                        <Button type="primary" style={g_button} onClick={this.enterShop}>Enter</Button>
                        </Input.Group>
                        </div>
                    </div>
                    </Col>
                    
                </Row>
                
            );
        }

        

        const howToShop = () => {
            return (
                <Row  >
                    <Col span={24} >
                        <div style={blockContainer}>
                            <Row>
                                <Col>
                                <p style={greenBold}>How to shop</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col span={8}>
                                    <Card  style={cardStyle}>
                                        <Row gutter={{xs: 8, sm: 16}}>
                                            
                                            <Col span={18}>
                                            <Meta
                                                title="title"
                                                description="description"
                                            />
                                            </Col>
                                        </Row>
                                    </Card>
                                </Col>
                                    <Card  style={cardStyle}>
                                        <Row gutter={{xs: 8, sm: 16}}>
                                            
                                            <Col span={18}>
                                            <Meta
                                                title="title"
                                                description="description"
                                            />
                                            </Col>
                                        </Row>
                                    </Card>
                                    <Card  style={cardStyle}>
                                        <Row gutter={{xs: 8, sm: 16}}>
                                            
                                            <Col span={18}>
                                            <Meta
                                                title="title"
                                                description="description"
                                            />
                                            </Col>
                                        </Row>
                                    </Card>
                            </Row>
                        </div>
                    </Col>
                    
                </Row>
                
            );
        }

        return (
            <main>
                <NavBar />
                    {enterLocationBlock()}
                    {howToShop()}
            </main>
        );
    }
}

const blockContainer = {
    height: 500,
    display: 'flex',
    justifyContent:'center',
    alignItems:'center',
}

const locationBlock = {
    backgroundImage: "url('assets/images/buyer_welcome_image.svg')",
    backgroundSize: 'cover',
}

const whiteBold = {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 24
}

const g_button = {
    background: darkGreen,
    borderColor: darkGreen
}

const greenBold = {
    color: darkGreen,
    fontWeight: 'bold',
    fontSize: 24
}

const cardStyle = {
    borderRadius: 32,
    borderColor: lightGreen,
    margin: 16
};

export default HomeView;