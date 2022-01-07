import React from 'react';
import classes from './Modal.module.css'

const Modal = (props) => {

    const onClickHandler = () => {
        props.updateModal("");
    }

    return (
        <div className={classes['modal']}>
            <div className={classes['modal-content']}>
                <div className={classes['modal-header']}>
                    Alert
                </div>
                <div className={classes['modal-body']}>
                    {props.message}
                </div>
                <div className={classes['modal-footer']}>
                    <button className={classes['modal-button']} type='button' onClick={onClickHandler}>Okay</button>
                </div>
            </div>
        </div>
    );
}

export default Modal;