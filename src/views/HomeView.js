import React from 'react';
import NavBar from '../components/NavBar';
import SubNavBar from '../components/SubNavBar';
import {Row, Col, InputGroup, Button, Card} from 'antd';
import logo from '../img/GroceryouLogo.png';
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

        const enterLocationBlock = () => (
            <div style={{...blockContainer, ...locationBlock}} align="middle">
                <div>
                <p style={whiteBold}>We deliver your groceries from strores nearby your home</p>
                <Input.Group compact>
                <Input placeholder="Please enter your address" style={{ width: '500px' }} onChange={this.updateLocation}/>
                <Button type="primary" style={g_button} onClick={this.enterShop}>Enter</Button>
                </Input.Group>
                </div>
            </div>
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
                            <Card  style={cardStyle}>
                                <Meta
                                    title="title"
                                    description="description"
                                />
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card  style={cardStyle}>
                                <Meta
                                    title="title"
                                    description="description"
                                />
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card  style={cardStyle}>
                                <Meta
                                    title="title"
                                    description="description"
                                />
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>   
        );

        const dealOfWeek = () => (
            <div style={blockContainer} align="middle" justify="middle">
                <div>                                
                    <p style={greenBold}>dealOfWeek</p>                                                            
                </div>
            </div>                
        );

        const courierApply = () => (
            <div>
                <Row>
                <div style={greenBox}>
                <p style={whiteBold}>Do you want to be a courier?</p>
                </div>
                </Row>
                <Row>
                <p style={whiteBold}>Apply for <img height="12" src={logo} alt="grocery"/>courier position</p>
                </Row>
            </div>
        );

        return (
            <main>
                <NavBar />
                {enterLocationBlock()}
                {howToShop()}
                {/*dealOfWeek()*/}
                {courierApply()}
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

const greenBox = {
    backgroundColor: lightGreen
}

const normal = {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18
}

const cardStyle = {
    borderRadius: 32,
    borderColor: lightGreen,
    margin: 16
};

export default HomeView;