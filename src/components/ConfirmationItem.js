import React from "react";
import {Modal} from "antd";

import styles from "./ConfirmationItem.module.css"
import store from "../store";
import {conf_confirm, conf_replace} from "../redux/confirmationActions";

function ConfirmationItem(props){


    const confirm = () => {
        store.dispatch(conf_confirm(props.id));
    };

    const replace = () => {
        store.dispatch(conf_replace(props.id));
    };

    return(
        <div className={styles.content}>
            <h2>{props.content.name}</h2>
            <h2>{props.content.amount}{props.content.unitType}</h2>
            <h2>{(props.content.unitPrice * props.content.amount)}</h2>
            <div>
                <button
                    className={styles.vButton}
                    onClick={confirm}
                >V</button>;
                <button
                    className={styles.xButton}
                    onClick={replace}
                >X</button>
                <Modal></Modal>
            </div>
        </div>
    )
}

export default ConfirmationItem;
