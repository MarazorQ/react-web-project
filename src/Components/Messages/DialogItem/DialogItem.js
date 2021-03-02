import React from 'react';
import Styles from '../Messages.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = '/Messages/' + '' + props.id;
    return(
        <div className={Styles.item}>
            <NavLink activeClassName={Styles.active} to={path}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;