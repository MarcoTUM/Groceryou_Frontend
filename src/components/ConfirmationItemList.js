import React from "react";
import ConfirmationItem from "./ConfirmationItem";

class ConfirmationItemList extends React.Component{
    constructor(props) {
        super(props);
        let components = [];
        for(let item in props.items){
            components.push(
                <ConfirmationItem
                    content = {this.props.items[item].content}
                    key = {this.props.items[item].key}
                    state = {this.props.items[item].state}
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
