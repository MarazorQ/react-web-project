import React from 'react';
import Styles from '../Messages.module.css';

const Message = (props) => {
    return(
        <div className={Styles.message}>{props.message}</div>
    )
}

export default Message;