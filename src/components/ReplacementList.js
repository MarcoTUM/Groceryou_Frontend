import React from "react";
import ReplacementItem from "./ReplacementItem";

class ReplacementList extends React.Component{

    constructor(props) {
        super(props);
    }

    render(){

        let components = [];
        let key = 0;
        for(let prop in this.props.replacements){
            if (Object.prototype.hasOwnProperty.call(this.props.replacements,prop)){
                console.log(this.props.replacements[prop]);
                components.push(
                    <ReplacementItem
                        content = {this.props.replacements[prop]}
                        key = {key++}
                    />
                )
            }
        }

        return(
            <div>
                {components}
            </div>
        );
    }
}

export default ReplacementList;
