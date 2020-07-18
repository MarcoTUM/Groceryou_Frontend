import React from 'react';
import './ShoppingPage.css';
import {Row, Col, Button, List, Card, message} from 'antd';
import {FieldTimeOutlined, EuroOutlined} from '@ant-design/icons';
import {addToCart, removeFromCart} from '../redux/cartActions';
import { connect } from 'react-redux';
import ShoppingCart from './ShoppingCart';
import ShopSections from './ShopSections';
import LoadingSpinner from './LoadingSpinner';
import UserService from '../services/UserService';

const { Meta } = Card;
const mapStateToProps = state => ({
    shop: state.currentShop.data,
    cart: state.cart
})

const mapDispatchToProps = (dispatch) => ({
    addToCart: (product, qty) => {dispatch(addToCart(product, qty))},
    deleteCartItem: (product) => {dispatch(removeFromCart(product))}
});

class ShoppingPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showItems: false,
            showCategories: false,
            selectedItems:[],
            selectedCategories: [],
            estimatedTime: 20,
        };

        this.showItemList = this.showItemList.bind(this);
        this.hideItemList = this.hideItemList.bind(this);
        this.hideCategories = this.hideCategories.bind(this);
        this.handleCheckout = this.handleCheckout.bind(this);
        this.handleClickSection = this.handleClickSection.bind(this);
        
    }


    handleCheckout() {
        let isLoggedIn = UserService.isAuthenticated();
        if(!isLoggedIn){
            this.props.history.push('/login');
        }else{
            this.props.history.push('/checkout');
        }
    }

    showItemList(category){
        this.setState({
            selectedItems: this.props.shop.products.filter(item => item.category === category),
            showItems: true
        })
    }

    handleClickSection(section){
        if(section==='checkout'){
            const canProceed = this.props.shop != null && this.props.cart.price>=this.props.shop.minimumPrice;
            if(canProceed){
                this.handleCheckout();
            }else{
                message.error('You can not checkout, before the minimum price is reached');
            }
            return;
        }
        const products = this.props.shop.products;
        const productsOfSection = products.filter((item)=>item.section===section);

        if(productsOfSection.length===0){
            message.error('This section is empty');
        } else {
            this.setState({ 
                selectedCategories : [...new Set(productsOfSection.map(item => item.category))],
                showCategories: true
            });
        }
        
        
        
    }

    hideItemList(){
        this.setState({
            showItems: false
        })
    }

    hideCategories(){
        this.setState({
            showCategories: false
        })
    }


    

    render(){

        const sections = () => {
            if(this.props.shop==null){
                return (<LoadingSpinner/>);
            }else{
                return (<ShopSections onClickItem={(section)=>this.handleClickSection(section)}/>);
            }
        }

        const shopDetail = () => {
            if(this.props.shop==null){
                return(<LoadingSpinner/>);
            } else {
                return(<div>
                    <div className='shopHead' width='100%'>
                    <img className='shopIcon' alt="logo" src={this.props.shop.icon}/>
                    <h4 className='shopAddress'>{this.props.shop.address.street} {this.props.shop.houseNr}</h4>
                    </div>
                    <div/>
                    <h3 className='title'><FieldTimeOutlined /> Estimated Delivery Time </h3>
                    <h4 className='content'>{this.state.estimatedTime} Minutes</h4>
                    <h3 className='title'><EuroOutlined /> Minimum Order Price</h3>
                    <h4 className='content'>{this.props.shop.minimumPrice} €</h4>
                    </div>);
            }
        }

        const floatingCategories =() => (
            <div className={this.state.showCategories?'floatingContainer':'hidden'}>
                <Button type="primary" className='button' onClick={this.hideCategories}>X</Button>
                <Row className="categories">
                {this.state.selectedCategories.length ===0?
                <h3>Empty Section</h3>
                :
                this.state.selectedCategories.map(category=>
                <Col key={category}  span={6}>
                    <div className="woodenBox" onClick={()=>this.showItemList(category)}>
                        <img alt={category} src={`./images/categories/${category}.svg`}/>
                    </div>
                </Col>)
                }
                <div className={this.state.showItems?'blurCover':'hidden'}/>
                </Row>
            </div>
        )

        const floatingItemList = () => (
            <div className={this.state.showItems?'floatingContainer':'hidden'}>
                <Button type="primary"  className='button' onClick={this.hideItemList}>back to categories</Button>
                {this.props.shop==null?
                <LoadingSpinner/>
                :
                <List
                locale={{ emptyText: (<span>
                    Loading
                    <Button>do something</Button>
                    </span>)}}
                bordered = {false}
                dataSource = {this.state.selectedItems}
                renderItem={(item) => (
                    <Card className="cart-card">
                        <Row gutter={{xs: 8, sm: 16}}>
                            <Col span={6}>
                                <img width="100%" alt={item.image} src={item.image}/>
                            </Col>
                            <Col span={18}>
                            <Meta
                                title={item.name}
                                description={"Price " + item.price + '€/' + item.unitType}
                            />
                            <Button type="primary" onClick={()=>this.props.addToCart(item, 1)}>Add to Cart</Button>
                            </Col>
                        </Row>
                    </Card>)}/>}
            </div>
        )

        const canProceed = this.props.shop != null && this.props.cart.price>=this.props.shop.minimumPrice;

        return (
                <Row className='shoppingPage'>
                    <Col span={4} className="side-bar">
                        {shopDetail()}
                    </Col>

                    <Col offset={2} span={12}>
                        {sections()}
                    
                        
                    </Col>
                    <Col offset={2} span={4} className="side-bar">
                        
                        <div className='cartWrapper'>
                        <ShoppingCart/>
                        
                        <Button type="primary" shape='rounded' className='button' disabled={!canProceed} onClick={this.handleCheckout}>
                            Checkout
                        </Button>
                        </div>
                    </Col>
                    
                    {floatingCategories()}
                    {floatingItemList()}
                </Row>               
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingPage);