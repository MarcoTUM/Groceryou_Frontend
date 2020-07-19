import React from "react";
import ReplacementItem from "./ReplacementItem";
import styles from "./ReplacementList.module.css"

class ReplacementList extends React.Component{

    /*
    constructor(props) {
        super(props);
    }
    */

    render(){

        let components = [];
        let key = 0;
        for(let prop in this.props.replacements){
            if (Object.prototype.hasOwnProperty.call(this.props.replacements,prop)){
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
                <div className={styles.content}>
                    <h2>Product</h2>
                    <h2>Amount</h2>
                    <h2>Price €</h2>
                </div>
                {components}
            </div>
        );
    }
}

export default ReplacementList;
