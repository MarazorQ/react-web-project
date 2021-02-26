import React from 'react';
import Styles from './Messages.module.css';

const Messages = () =>{
    return(
        <div className={Styles.content}>
            <div className={Styles.dialogs}>
                <div className={Styles.dialogsItems}>
                    <div className={Styles.item}>
                        Artem
                    </div>
                    <div className={Styles.item}>
                        Pasha
                    </div>
                    <div className={Styles.item}>
                        Sasha
                    </div>
                    <div className={Styles.item}>
                        Roma
                    </div>
                </div>
            </div>
            <div className={Styles.messages}>
                <div className={Styles.message}>sdasdasd</div>
                <div className={Styles.message}>dasdasd</div>
                <div className={Styles.message}>dasdaasd</div>
            </div>
        </div>
    )
}

export default Messages;