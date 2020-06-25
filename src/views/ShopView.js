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
                    <img src="assets/images/ShopVege.svg"/>
                </div>
            );
        }  
        return (
            <div>
            <NavBar />
            
                {shop_Section()}
            
            
            </div>
        );
    }


}

export default HomeView;