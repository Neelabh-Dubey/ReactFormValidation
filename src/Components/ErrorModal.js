import {createPortal} from "react-dom";

import styles from "./ErrorModal.module.css";

function OverlayModal(props){
    return(
        <div className={styles.overlay}>
            <h2 className={styles.header}>Invalid Input</h2>
            <p className={styles.msg}>{props.msg}</p>
            <button onClick={props.onClick} className={styles.btn}>Okay</button>
        </div>
    );
}

function BackdropModal(){
    return(
        <div className={styles.backdrop}></div>
    );
}

function ErrorModal(props){
    return(
        <>
            {createPortal(<BackdropModal />, document.getElementById('backdrop'))}
            {createPortal(<OverlayModal msg={props.Msg} onClick={props.onClick}/>, document.getElementById('overlay-modal'))}
        </>
    )
}
export default ErrorModal;