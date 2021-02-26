import React from 'react';
import Styles from './Messages.module.css';
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
    let path = '/Messages/' + '' + props.id;
    return(
        <div className={Styles.item}>
            <NavLink activeClassName={Styles.active} to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return(
        <div className={Styles.message}>{props.message}</div>
    )
}

const Messages = () =>{
    return(
        <div className={Styles.content}>
            <div className={Styles.dialogs}>
                <div className={Styles.dialogsItems}>
                    <DialogItem name="Artem" id="2"/>
                    <DialogItem name="Pasha" id="3"/>
                    <DialogItem name="Roma" id="4"/>
                    <DialogItem name="Artut" id="5"/>
                    <DialogItem name="Dasha" id="7"/>
                    <DialogItem name="Art" id="11"/>
                    <DialogItem name="Rutu" id="24"/>
                </div>
            </div>
            <div className={Styles.messages}>
                <Message message="How are you"/>
                <Message message="Fuck you"/>
                <Message message="Hi!"/>
            </div>
        </div>
    )
}

export default Messages;