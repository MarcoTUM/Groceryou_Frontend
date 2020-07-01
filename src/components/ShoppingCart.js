import React from 'react';
import {Row, Col, Button, List} from 'antd';
import { connect } from 'react-redux';
import {addToCart, removeFromCart} from '../redux/cartActions';
import { ShoppingCartOutlined,FieldTimeOutlined, EuroOutlined} from '@ant-design/icons';

const mapStateToProps = state => ({
    cart: state.cart
})

const mapDispatchToProps = (dispatch) => ({
    addToCart: (product, qty) => {dispatch(addToCart(product, qty))},
    deleteCartItem: (product) => {dispatch(removeFromCart(product))}
});

class ShoppingCart extends React.Component {
    render() {
        return (
            <div>
            <h3><ShoppingCartOutlined/> Current Order</h3>
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
                Total ({this.props.cart.cartItems.reduce((a,c)=> a+c.qty, 0)} items)</h3>
                
            {/*<h3>{this.props.cart.cartItems.reduce((a,c) => a+c.product.price*c.qty, 0)} €</h3>*/}
            {<h3>{this.props.cart.price} €</h3>}
           
        </div>
        );
  
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);