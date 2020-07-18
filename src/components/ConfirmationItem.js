import React from "react";
import styles from "./ConfirmationItem.module.css"
import store from "../store";
import {conf_confirm, conf_missing/*, conf_replace*/} from "../redux/confirmationActions";
import {confirm_state} from "../shared/confirmStates";

function ConfirmationItem(props){


    const confirm = () => {
        store.dispatch(conf_confirm(props.id));
    };

    const missing = () => {
        store.dispatch(conf_missing(props.id));
        if(props.state !== confirm_state.replace)
            props.showModal(props.id);
    };

    let vButtonStyle = styles.vButton;

    if(props.state === confirm_state.confirm)
        vButtonStyle=styles.vButtonPressed;

    const vButton = <button
        className={vButtonStyle}
        onClick={confirm}
    >V</button>;

    let xButtonStyle = styles.xButton;

    if(props.state === confirm_state.missing)
        xButtonStyle = styles.xButtonMissing;
    else if(props.state === confirm_state.replace)
        xButtonStyle = styles.xButtonReplace;

    const xButton = <button
        className={xButtonStyle}
        onClick={missing}
    >X</button>

    return(
        <div className={styles.content}>
            <h2>{props.content.name}</h2>
            <h2>{props.content.amount}{props.content.unitType}</h2>
            <h2>{(props.content.unitPrice * props.content.amount)}</h2>
            <div>
                {vButton}
                {xButton}
            </div>
        </div>
    )
}

export default ConfirmationItem;
