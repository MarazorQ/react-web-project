import React from 'react';
import Styles from './Nav.module.css';

function Nav(){
    return(
        <nav className={Styles.nav}>
            <div className={Styles.item}>
                <a href='/Profile'>Profile</a>
            </div>
            <div>
                <a href='/Messages'>Messages</a>
            </div>
            <div>
                <a>News</a>
            </div>
            <div>
                <a>Music</a>
            </div>
            <div>
                <a>Settings</a>
            </div>
        </nav>
    )
}

export default Nav;