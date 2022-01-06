import React from 'react';
import classes from './Modal.module.css'

const Modal = () => {
    return (
        <div className={classes['modal']}>
            <div className={classes['modal-content']}>
                <div className={classes['modal-header']}>
                    Header
                </div>
                <div className={classes['modal-body']}>
                    Lorem ipsum dolor et amet bla bla this is text long enough so it should be sufficient to cover ale modal length.
                    And one more sentence.
                </div>
                <div className={classes['modal-footer']}>
                    <button className={classes['modal-button']} type='button'>Okay</button>
                </div>
            </div>
        </div>
    );
}

export default Modal;