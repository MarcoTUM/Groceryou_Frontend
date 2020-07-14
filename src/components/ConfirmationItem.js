import React from "react";
import {Modal} from "antd";

import styles from "./ConfirmationItem.module.css"
import store from "../store";
import {conf_confirm, conf_replace} from "../redux/confirmationActions";
import {confirm_state} from "../shared/confirmStates";

function ConfirmationItem(props){


    const confirm = () => {
        store.dispatch(conf_confirm(props.id));
    };

    const replace = () => {
        store.dispatch(conf_replace(props.id));
    };

    let vButton = <button
        className={styles.vButton}
        onClick={confirm}
    >V</button>;

    if(props.state === confirm_state.confirm){
        vButton = <button
            className={styles.vButtonPressed}
            onClick={confirm}
        >V</button>;
    }

    return(
        <div className={styles.content}>
            <h2>{props.content.name}</h2>
            <h2>{props.content.amount}{props.content.unitType}</h2>
            <h2>{(props.content.unitPrice * props.content.amount)}</h2>
            <div>
                {vButton}
                <button
                    className={styles.xButton}
                    onClick={replace}
                >X</button>
            </div>
        </div>
    )
}

export default ConfirmationItem;
