import React from 'react';
import './ShoppingPage.css';
import {Row, Col, Button, List, Card} from 'antd';
import { connect } from 'react-redux';
import {fetchShops} from '../redux/shopActions';
import {addToCart, removeFromCart} from '../redux/cartActions';
import { ShoppingCartOutlined,FieldTimeOutlined, EuroOutlined} from '@ant-design/icons';

const {Meta} = Card;
const mapStateToProps = state => ({
    shops: state.shops,
    cart: state.cart
})

const mapDispatchToProps = (dispatch) => ({
    fetchShops: () => {dispatch(fetchShops())},
    addToCart: (product, qty) => {dispatch(addToCart(product, qty))},
    deleteCartItem: (product) => {dispatch(removeFromCart(product))}
});

class ShoppingPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            shopData:null,
            shops: null,
            showItems: false,
            selectedItems:[]
        };

        //this.fetchData = this.fetchData.bind(this);  // replaced by redux
        this.showItemList = this.showItemList.bind(this);
        this.hideItemList = this.hideItemList.bind(this);
        this.handleCancel = this.handleCancel(this);
    }

    componentDidMount(){
        this.props.fetchShops();

    }

    checkoutHandler(){
        this.props.history.push("/signin?redirect=shipping")
    }

    showItemList(category){
        console.log(category);
        this.setState({
            selectedItems: this.props.shops.shops[0].products.filter(item => item.category == category),
            showItems: true
        })
    }

    hideItemList(){
        this.setState({
            showItems: false
        })
    }

    handleCancel() {
        this.setState({ showItems: false });
      }

    render(){
        const categories = () => (
            <Row>
                {this.props.shops.loading?
                <div>Loading</div>
                :
                [... new Set(this.props.shops.shops[0].products.map(item => item.category))].map(category=>
                <Col span={8} >
                    <div className="woodenBox" onClick={()=>this.showItemList(category)}>
                        <img alt="category" src={`./images/categories/${category}.png`}/>
                    </div>
                </Col>
                )
            }
            </Row>
        )

        const shopDetail = () => {
            if(this.props.shops.loading){
                return(<p>Loading</p>);
            } else {
                return(<div>
                    <h3><FieldTimeOutlined /> Estimated Delivery Time </h3>
                    <h4>{this.state.estimatedTime} Minutes</h4>
                    <h3><EuroOutlined /> Minimum Order Price</h3>
                    <h4>{this.props.shops.shops[0].minimumPrice} €</h4>
                    </div>);
            }
        }

        const shoppingCart = () => (
            <div>
                <h3><ShoppingCartOutlined/> Current Order</h3>
                <List
                bordered = {false}
                dataSource = {this.props.cart.cartItems}
                renderItem={(item) => (
                    <Row className="cart-item" gutter={{xs: 8, sm: 16}}>
                        <Col span={6}>
                            <img width="100%" alt="logo" src={item.product.image}/>
                        </Col>
                        <Col span={18}>
                        <h4>{item.product.name} {item.product.price} €</h4>
                        <div>
                        <select value={item.qty} onChange={(e)=> {
                            console.log(this.props.cart);
                            this.props.addToCart(item.product, parseInt(e.target.value, 10));
                            }}>
                            <option valu="1">1</option>
                            <option valu="2">2</option>
                            <option valu="3">3</option>
                        </select>
                        </div>
                        
                        <Button type="button" className="button" onClick={()=>this.props.deleteCartItem(item.product)}>
                            Delete
                        </Button>
                        </Col>
                    </Row>)}/>
                <h3>
                    Total ({this.props.cart.cartItems.reduce((a,c)=> a+c.qty, 0)} items)</h3>
                    
                <h3>{this.props.cart.cartItems.reduce((a,c) => a+c.product.price*c.qty, 0)} €</h3>
                <Button className="button primary" disabled={this.props.cart.cartItems.length === 0} onClick={()=>this.checkoutHandler()}>
                    Proceed to Checkout
                </Button>
            </div>
        )

        const floatingItemList = () => (
            <div className={this.state.showItems?'floatingContainer':'hidden'}>
                <Button type="primary" onClick={this.hideItemList}>back</Button>
                {this.props.shops.loading?
                <div>Loading</div>
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
                                <img width="100%" alt="logo" src={item.image}/>
                            </Col>
                            <Col span={18}>
                            <Meta
                                title={item.name}
                                description={"Price " + item.price + "€"}
                            />
                            <Button type="primary" onClick={()=>this.props.addToCart(item, 1)}>Add to Cart</Button>
                            </Col>
                        </Row>
                    </Card>)}/>}
            </div>
        )
               
        return (
            <div>     
                <Row>
                    <Col span={4} className="side-bar">
                        {shopDetail()}
                    </Col> 
                    <Col span={16}>
                        
                        {categories()}
                    
                        
                    </Col>
                    <Col span={4} className="side-bar">
                        {shoppingCart()}
                    </Col>
                    {floatingItemList()}
                </Row>                      
            </div>

        );
    }
}

export default  connect(mapStateToProps, mapDispatchToProps)(ShoppingPage);