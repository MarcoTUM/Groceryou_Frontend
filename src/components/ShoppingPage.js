import React from 'react';
import './ShoppingPage.css';
import data from '../shared/data';
import {Row, Col, Button} from 'antd';

class ShoppingPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    

    closeMenu(){
        document.querySelector(".sidebar").classList.remove("open");
    }

    addItem(product){
        console.log(product);
    }

    render(){

        const openMenu = ()=>{
            document.querySelector(".sidebar").classList.add("open");
        }

        const closeMenu = ()=>{
            document.querySelector(".sidebar").classList.remove("open");
        }
               
        return (
            <div className="grid-container">
            <header className="header" >
                <div className="brand">
                    <button onClick={openMenu}>
                        &#9776;
                    </button>
                    <a href="index.html">Groceryou</a>
                </div>
                <div className="header-links">
                    <a href="cart.html">Cart</a>
                    <a href="signin.html">Sign In</a>
                </div>
            </header>
            <aside className="sidebar">
                <h3>Shopping Categories</h3>
                <button className="sidebar-close-button" onClick={closeMenu}>X</button>

                <ul>
                    <li>
                        <a href="index.html">Pants</a>
                    </li>

                    <li href="index.html">Shirts</li>
                </ul>
            </aside>
            
            <main className="main">
                <Row>
                <Col>
                <div className="content">
                    <ul className="products">
                        {
                            data.products.map(product => (
                                <li>
                                <div className="product">
                                    <img className="product-image" src={product.image} alt="product"/>
                                    <div className="product-name">
                                    <a href="product.html">{product.name}</a> </div>
                                    <div className="product-brand">{product.brand}</div>
                                    <div className="product-price">{product.price}€</div>
                                    <div className="product-rating">{product.rating} Stars ({product.numReviews} Reviews)</div>
                                    <Button type="primary" onClick={()=>this.addItem(product)}>Add to Cart</Button>
                                </div>
                                </li>))
                        }
                    </ul>
                </div>
                </Col>
                <Col>
                abc
                </Col>
                </Row>
                
            <footer className="footer">
                All right reserved
            </footer>
                
            </main>
            </div>

        );
    }
}

export default ShoppingPage;