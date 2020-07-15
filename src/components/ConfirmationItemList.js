import React from "react";
import ConfirmationItem from "./ConfirmationItem";

class ConfirmationItemList extends React.Component{

    constructor(props) {
        super(props);
        this.showModal = this.showModal.bind(this);

    }

    showModal = (id) => {
        this.props.showModal(id)
    };

    render(){

        let components = [];
        let key = 0;
        for(let item in this.props.items){
            components.push(
                <ConfirmationItem
                    content = {this.props.items[item].content}
                    state = {this.props.items[item].state}
                    key = {key}
                    id = {key++}
                    showModal = {this.showModal}
                />
<<<<<<< HEAD
                );
        }
        this.state={
            components: components
=======
            );
>>>>>>> b0645e5ef56699ee911f20703615c21dc318176e
        }

        return(
            <div>
                {components}
            </div>
        );
    }

}

export default ConfirmationItemList;
