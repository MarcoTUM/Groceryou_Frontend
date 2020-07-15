import React from "react";
import ConfirmationItem from "./ConfirmationItem";

class ConfirmationItemList extends React.Component{
    constructor(props) {
        super(props);
        let components = [];
        for(let item in props.items){
            components.push(
                <ConfirmationItem
                    name = {this.props.items[item].name}
                    amount={this.props.items[item].amount}
                    unitType={this.props.items[item].unitType}
                    price={this.props.items[item].unitPrice * this.props.items[item].amount}
                />
                );
        }
        this.state={
            components: components
        }
    }

    render(){
        return(
            <div>
                {this.state.components}
            </div>
        );
    }

}

export default ConfirmationItemList;
