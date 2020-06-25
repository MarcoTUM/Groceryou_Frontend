import React from 'react';

import {Button, Layout} from 'antd';
import MockMap from '../img/map_courier_view_mock.png';
import './CourierHome.css';

const {Header, Footer, Sider, Content} = Layout;


class CourierHome extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            login: false
        }
    }

    mockLogin = () =>{
        this.setState({
            login: true
        })
        console.log("DING")
    };

    DefaultContent = (props) =>{
        return(
            <div>
                <Layout>
                    <Header/>
                    <Sider>
                        <a>Requests listed here</a>
                        <Button>Enter A request</Button>
                    </Sider>
                    <Content>
                        <img id='mapMock' src={MockMap}/>
                    </Content>
                    <Footer/>
                </Layout>
            </div>
        )
    }

    NoLogin = (props) => {
        return(
            <div>
                <h2>Please Login / Register!</h2>
                <Button type="dashed" onClick={this.mockLogin}>Mock Login</Button>
            </div>
        )
    }

    RenderContent = (props) =>{
        const isLoggedIn = props.login;
        if(isLoggedIn)
            return <this.DefaultContent/>
        else
            return <this.NoLogin/>
    }

    render(){
        if(this.state.login)
            return <this.DefaultContent/>
        else
            return <this.NoLogin/>
    }

}

export default CourierHome;
