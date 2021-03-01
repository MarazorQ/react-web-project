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
    let MessageItems = [
        {id: 1, message: 'hi'},
        {id: 2, message: 'How are you'},
        {id: 3, message: 'by by'},
        {id: 3, message: 'by byasdadsasddas'}
    ]
    let newMessageItems = MessageItems.map((items) => {
        return(<Message message={items.message}/>)
    })
    let DialogItems = [
        {id: 1, name: 'Artem'},
        {id: 2, name: 'gena'},
        {id: 3, name: 'Apasha'},
        {id: 4, name: 'dasa'},
        {id: 5, name: 'vas'},
        {id: 6, name: 'Ar'}
    ]
    let newDialogItems = DialogItems.map(items => <DialogItem name={items.name} id={items.id}/>)
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