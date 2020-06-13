import React from 'react';
import NavBar from '../components/NavBar';
import SubNavBar from '../components/SubNavBar';
import {Row, Col} from 'antd';
import Logo from '../img/GroceryouLogo.png';

class HomeView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {

        const enterLocationBlock = () => {
            return (
                <Row  >
                    <Col span={24} >
                    <div style={locationBlockStyle} align="middle" justify="middle">
                        <p style={whiteBold}>We deliver your groceries from strores nearby your home</p>
                        <p style={whiteBold}>Please enter your address</p>

                    </div>
                    </Col>
                    
                </Row>
                
            );
        }

        return (
            <main>
                <NavBar />
                    {enterLocationBlock()}
            </main>
        );
    }
}

const locationBlockStyle = {
    backgroundImage: "url('assets/images/buyer_welcome_image.svg')",
    height: 600,
    backgroundSize: 'cover'
}

const whiteBold = {
    color: '#FFFFFF'
}

export default HomeView;