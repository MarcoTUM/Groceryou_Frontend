import React from "react";

function ReplacementItem(props){

    return(
        <div>
            <h2>{props.content.name}</h2>
            <h2>{props.content.qty}</h2>
            <h2>{props.content.price}</h2>
        </div>
    )

}

export default ReplacementItem;
