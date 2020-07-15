import React from "react";
import styles from "./ReplacementItem.module.css"

function ReplacementItem(props){

    return(
        <div className={styles.content}>
            <h2>{props.content.name}</h2>
            <h2>{props.content.qty}</h2>
            <h2>{props.content.price}</h2>
        </div>
    )

}

export default ReplacementItem;
