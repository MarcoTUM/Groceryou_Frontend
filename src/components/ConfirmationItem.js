import React from "react";
import {Modal} from "antd";

import styles from "./ConfirmationItem.module.css"

function ConfirmationItem(props){


    return(
        <div className={styles.content}>
            <h2>{props.content.name}</h2>
            <h2>{props.content.amount}{props.content.unitType}</h2>
            <h2>{(props.content.unitPrice * props.content.amount)}</h2>
            <div>
                <button className={styles.vButton}>V</button>
                <button className={styles.xButton}>X</button>
                <Modal></Modal>
            </div>
        </div>
    )
}

export default ConfirmationItem;
