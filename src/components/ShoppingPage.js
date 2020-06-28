import React from 'react';
import './ShoppingPage.css';
import data from '../shared/data';
import { Row, Col, Button, List, Card } from 'antd';
import axios from 'axios';
import { useSelector, useDispatch, connect } from 'react-redux';
import { listProduct } from '../redux/productActions';
import { addToCart, removeFromCart } from '../redux/cartActions';
import { withRouter } from 'react-router-dom';
import { ShoppingCartOutlined } from '@ant-design/icons';

const { Meta } = Card;
const mapStateToProps = state => ({
    shopData: state.productList,
    cart: state.cart
})

const mapDispatchToProps = (dispatch) => ({
    fetchShops: () => { dispatch(listProduct()) },
    addToCart: (product, qty) => { dispatch(addToCart(product, qty)) },
    deleteCartItem: (product) => { dispatch(removeFromCart(product)) }
});

class ShoppingPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            shopData: null
        };

        //this.fetchData = this.fetchData.bind(this);  // replaced by redux
    }

    componentDidMount() {
        this.props.fetchShops();
    }

    checkoutHandler() {
        this.props.history.push("/signin?redirect=shipping")
    }

    render() {

        const shoppingCart = () => (
            <div align="middle" justify="middle" className="cart">
                <h3><ShoppingCartOutlined /> Current Order</h3>
                <List
                    bordered={false}
                    dataSource={this.props.cart.cartItems}
                    renderItem={(item) => (
                        <Row className="cart-item" gutter={{ xs: 8, sm: 16 }}>
                            <Col span={6}>
                                <img width="100%" alt="logo" src={item.product.image} />
                            </Col>
                            <Col span={18}>
                                <h4>{item.product.name} {item.product.price} €</h4>
                                <div>
                                    <select value={item.qty} onChange={(e) => {
                                        console.log(this.props.cart);
                                        this.props.addToCart(item.product, parseInt(e.target.value, 10));
                                    }}>
                                        <option valu="1">1</option>
                                        <option valu="2">2</option>
                                        <option valu="3">3</option>
                                    </select>
                                </div>

                                <Button type="button" className="button" onClick={() => this.props.deleteCartItem(item.product)}>
                                    Delete
                        </Button>
                            </Col>
                        </Row>)} />
                <h3>
                    Total ({this.props.cart.cartItems.reduce((a, c) => a + c.qty, 0)} items)
                    :
                    € {this.props.cart.cartItems.reduce((a, c) => a + c.product.price * c.qty, 0)}
                </h3>
                <Button className="button primary" disabled={this.props.cart.cartItems.length === 0} onClick={() => this.checkoutHandler()}>
                    Proceed to Checkout
                </Button>
            </div>
        )

        const itemList = () => (


            <div>
                {this.props.shopData.loading ?
                    <div>Loading</div>
                    :
                    <List
                        locale={{
                            emptyText: (<span>
                                Loading
                                <Button>do something</Button>
                            </span>)
                        }}
                        bordered={false}
                        dataSource={this.props.shopData.products[0].products}
                        renderItem={(item) => (
                            <Card className="cart-card">
                                <Row gutter={{ xs: 8, sm: 16 }}>
                                    <Col span={6}>
                                        <img width="100%" alt="logo" src={item.image} />
                                    </Col>
                                    <Col span={18}>
                                        <Meta
                                            title={item.name}
                                            description={"Price " + item.price + "€"}
                                        />
                                        <Button type="primary" onClick={() => this.props.addToCart(item, 1)}>Add to Cart</Button>
                                    </Col>
                                </Row>
                            </Card>)} />}
            </div>
        )

        return (
            <div>
                <Row>
                    <Col span={4}>
                    </Col>
                    <Col span={16}>
                        {itemList()}
                    </Col>
                    <Col span={4} className="side-bar">
                        {shoppingCart()}
                    </Col>
                </Row>
            </div>

        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingPage);