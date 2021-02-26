import  React from 'react';
import Styles from  './ContentInf.module.css';

const ContentInf = () => {
    return(
        <div>
            <div>
                <img src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350' />
            </div>
            <div className={Styles.item}>
                ava + description
            </div>
        </div>
        )
}

export default ContentInf;