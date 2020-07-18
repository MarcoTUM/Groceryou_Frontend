import React from 'react';
import './ShopSections.css';

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
                        <img src="assets/images/Section_Drink.svg" alt='drink'/>
                        </div>
                        <div className="Section_Can" onClick={()=>this.handleClick('canfood')}>
                        <img src="assets/images/Section_Canned.svg" alt='canfood'/>
                        </div>
                        <div className="Section_Meat" onClick={()=>this.handleClick('meat')}>
                        <img src="assets/images/Section_Meat.svg" alt='meat'/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="Section_Snack" onClick={()=>this.handleClick('snack')}>
                        <img width='100%' src="assets/images/Section_Snack.svg" alt='snack'/>
                        </div>
                        <div className="Section_Vege" onClick={()=>this.handleClick('vegetable')}>
                        <img src="assets/images/Section_Vegetable.svg" alt='vegetable'/>
                        </div>
                    </div>
                    <div className="row">
                    <div className="Section_Cash" onClick={()=>this.handleClick('checkout')}>
                        <img src="assets/images/Section_Cash.svg" alt='checkout'/>
                        </div>
                        <div className="Section_Fruit" onClick={()=>this.handleClick('fruit')}>
                        <img src="assets/images/Section_Fruit.svg" alt='fruit'/>
                        </div>
                    </div>
                </div>
        );
    }


}

export default ShopSections;