// An example of react component using no css

import React from 'react';
import LocationSearchInput from '../components/LocationSearchInput';
import {Row, Col, Button, Card} from 'antd';
import logo from '../img/GroceryouLogo.png';
import { Carousel } from 'antd'; 
import { darkGreen, lightGreen } from '../shared/colors';


class HomeView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            location:''
        };

        this.enterShop = this.enterShop.bind(this);
        this.updateLocation = this.updateLocation.bind(this)
    }
    
    updateLocation(_location) {
        this.setState({
          location: _location
        });
      }

    enterShop(){
        this.props.history.push({
            pathname: '/shopSelection',
            //search: '?query=abc',
            state: { detail: this.state.location}
          });
    }

    render() {
        const enterLocation = () => (
            <div style={{...blockContainer, ...locationBlock}} align="middle">
                <div>
                <p style={whiteBold}>We deliver your groceries from strores nearby your home</p>
                <Row style={{width: '100%'}}>
                <Col span={24} md={20}><LocationSearchInput onChange={this.updateLocation}/></Col>
                <Col span={24} md={4}><Button type="primary" style={{...g_button,...{width:"100%"}}} onClick={this.enterShop}>Enter</Button></Col>
                </Row>
                
                </div>
            </div>
        );

        const balloon = (imageUrl) => (
            <Card style={{...cardStyle,...{backgroundImage:`url(${imageUrl})`}}}>
            </Card>
        );

        const howToShop = () => (
            <div style={blockContainer} align="middle" justify="middle">
                <div>                              
                    <p style={greenBold}>How to shop</p>                                                            
                    <Row>
                        <Col span={8}>
                            <p  style={normal}>Choose store nearby your house</p>
                        </Col>
                        <Col span={8}>
                            <p   style={normal}>Buy groceries in lifelike shop</p>
                        </Col>
                        <Col span={8}>
                            <p style={normal}>Receive groceries in 30 minutes</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={8}>
                            {balloon('assets/images/concept1.svg')}
                        </Col>
                        <Col span={8}>
                            {balloon('assets/images/concept2.svg')}
                        </Col>
                        <Col span={8}>
                            {balloon('assets/images/buyer_welcome_image.svg')}
                        </Col>
                    </Row>
                </div>
            </div>   
        );

        
        const dealOfWeek = () => (
            <div style={{...blockContainer,...dealOfWeekBlock}} align="middle" justify="middle">
                <div style={dealOfWeekAd}>                   
                <Carousel autoplay>
                    <div>
                        <div style={carouselSlide}>
                            <div style={carouselCard}>
                                <h3>Grill season is back!</h3>
                                <Button type="primary" style={g_button}>See more</Button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div style={carouselSlide}>
                            <div style={carouselCard}>
                                <h3>Grill season is back!</h3>
                                <Button type="primary" style={g_button}>See more</Button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div style={carouselSlide}>
                            <div style={carouselCard}>
                                <h3>Grill season is back!</h3>
                                <Button type="primary" style={g_button}>See more</Button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div style={carouselSlide}>
                            <div style={carouselCard}>
                                <h3>Grill season is back!</h3>
                                <Button type="primary" style={g_button}>See more</Button>
                            </div>
                        </div>
                    </div>
                </Carousel>
                </div>                                           
            </div>                
        );
        

        const courierApply = () => (
            <div style={blockContainer}>
                <div style={{width:'80%'}}>
                            
                <Row>
                    <Col>
                        <div style={greenContainer}>                                      
                        <p style={whiteBold}>Do you want to be a courier?</p>
                        </div>
                    </Col>
                    <Col>
                    </Col>
                </Row>
                               
                <Row>
                    <Col>
                    <div style={greenContainer}>
                        <p style={whiteBold}>Apply for <img height="28" src={logo} alt="grocery"/>courier position</p>
                    </div>
                    </Col>
                </Row>
                <Row>
                    <Col offset={20}>
                        <Button type="primary" size="large" style={g_button}>
                            Apply
                            </Button>

                    </Col>
                </Row>
                </div>
                
            </div>
        );

        return (
            <main>
                {enterLocation()}
                {howToShop()}
                {dealOfWeek()}
                {courierApply()}
            </main>
        );
    }
}

const blockContainer = {
    height: '40rem',
    display: 'flex',
    justifyContent:'center',
    alignItems:'center',
}

const locationBlock = {
    backgroundImage: "url('assets/images/buyer_welcome_image.svg')",
    backgroundSize: 'cover',
}

const dealOfWeekBlock = {
    backgroundColor: '#E3E3E3'
}

const dealOfWeekAd = {
    height:'25rem',
    width:'60rem',
    position:'relative'
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

const whiteBold = {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 24
}

const greenContainer = {
    backgroundColor: lightGreen,
    paddingBottom: 0,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
    margin: 10,
    display: 'flex',
    justifyContent:'center',
    alignItems:'center'
}

const normal = {
    color: 'black',
    fontSize: 18
}

const cardStyle = {
    height: "8rem",
    borderRadius: 32,
    borderColor: lightGreen,
    margin: 16,
    backgroundSize: 'cover',
}

const carouselCard = {
    borderRadius: 32,
    position: 'absolute',
    paddingTop: '1rem',
    paddingBottom: '1rem',
    paddingLeft: '1rem',
    paddingRight: '1rem',
    backgroundColor: 'white',
    right:'5%',
    bottom:'30%'
}

const carouselSlide =  {
    height: '20rem',
    position: 'relative',
    overflow: 'hidden',
    backgroundSize: 'cover',
    backgroundImage: "url('assets/images/dealOfWeekRewe.svg')",
}


export default HomeView;
