import React from 'react';
import {Row, Col, Button, List} from 'antd';
import { connect } from 'react-redux';
import {addToCart, removeFromCart} from '../redux/cartActions';
import { ShoppingCartOutlined, PlusCircleFilled, MinusCircleFilled} from '@ant-design/icons';
import './ShoppingCart.css';

const mapStateToProps = state => ({
    cart: state.cart
})

const mapDispatchToProps = (dispatch) => ({
    addToCart: (product, qty) => {dispatch(addToCart(product, qty))},
    deleteCartItem: (product) => {dispatch(removeFromCart(product))}
});

class ShoppingCart extends React.Component {

    changeQuantityByNumber(item, change){
        if(item.qty+change<1 || item.qty + change > 15)
            return;        
        this.props.addToCart(item.product, item.qty + change);        
    }
    render() {
        return (
            <div className='shoppingCart'>
            <h3 className='title'><ShoppingCartOutlined/> Current Order</h3>
            <div className='list'>
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
                            
                            <Row className='qtyControl' justify="end">
                                <Col>
                                    <Button type="text" className="deleteButton" onClick={() => this.props.deleteCartItem(item.product)}>Delete</Button>
                                </Col>
                                <Col>
                                    <Row>
                                    <Col span={8}><MinusCircleFilled className='qtyButton' onClick={()=>this.changeQuantityByNumber(item,-1)}/></Col>
                                    <Col className='qtyNumber' span={8}>{item.qty}</Col>
                                    <Col span={8}><PlusCircleFilled className='qtyButton' onClick={()=>this.changeQuantityByNumber(item,+1)}/></Col>
                                    </Row>
                                </Col>
                                

                            </Row>
                        </Col>
                    </Row>)} />
            </div>
            <h3 className='bottomSumup'>Total ({this.props.cart.cartItems.reduce((a,c)=> a+c.qty, 0)} items)</h3>
            
            <h3 className='bottomSumup'>{this.props.cart.price} €</h3>
           
        </div>
        );
  
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);