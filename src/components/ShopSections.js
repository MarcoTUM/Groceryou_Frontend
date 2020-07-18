import React from 'react';
import './ShopSections.css';
import { Link } from 'react-router-dom';

class ShopSections extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };


    }
    
    handleClick(category){
        this.props.onClickItem(category);
    }
      

    render(){
        return (
            <div>
                    <div className="row">
                        <div className="Section_Drink" onClick={()=>this.handleClick('drink')}>
                        <img src="assets/images/Section_Drink.svg"/>
                        </div>
                        <div className="Section_Can" onClick={()=>this.handleClick('canfood')}>
                        <img src="assets/images/Section_Canned.svg"/>
                        </div>
                        <div className="Section_Meat" onClick={()=>this.handleClick('meat')}>
                        <img src="assets/images/Section_Meat.svg"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="Section_Snack" onClick={()=>this.handleClick('snack')}>
                        <img width='100%' src="assets/images/Section_Snack.svg"/>
                        </div>
                        <div className="Section_Vege" onClick={()=>this.handleClick('vegetable')}>
                        <img src="assets/images/Section_Vegetable.svg"/>
                        </div>
                    </div>
                    <div className="row">
                    <div className="Section_Cash" onClick={()=>this.handleClick('cash')}>
                        <img src="assets/images/Section_Cash.svg"/>
                        </div>
                        <div className="Section_Fruit" onClick={()=>this.handleClick('fruit')}>
                        <img src="assets/images/Section_Fruit.svg"/>
                        </div>
                    </div>
                </div>
        );
    }


}

export default ShopSections;