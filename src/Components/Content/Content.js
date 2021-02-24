import React from 'react';
import Styles from './Content.module.css';
import Posts from './Posts/Posts';

const Content = () =>{
    return(
        <div className={Styles.content}>
            <div>
                <img src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350' />
            </div>
            <div className={Styles.item}>
                ava + description
            </div>
            <Posts/>
        </div>
    )
}

export default Content;