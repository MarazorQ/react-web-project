import React from 'react';
import Styles from './Messages.module.css';
import {NavLink} from "react-router-dom";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";

const Messages = (props) =>{
    let newMessageItems = props.itemsMessages.map((items) => {
        return(<Message message={items.message}/>)
    })
    let newDialogItems = props.itemsDialog.map(items => <DialogItem name={items.name} id={items.id}/>)
    return(
        <div className={Styles.content}>
            <div className={Styles.dialogs}>
                <div className={Styles.dialogsItems}>
                    {newDialogItems}
                </div>
            </div>
            <div className={Styles.messages}>
                {newMessageItems}
            </div>
        </div>
    )
}

export default Messages;