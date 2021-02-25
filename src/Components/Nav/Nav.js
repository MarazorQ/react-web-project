import React from 'react';
import Styles from './Nav.module.css';
import {NavLink} from 'react-router-dom';

function Nav(){
    return(
        <nav className={Styles.nav}>
            <div className={Styles.item}>
                <NavLink to='/Profile' activeClassName={Styles.active}>Profile</NavLink>
            </div>
            <div className={Styles.item}>
                <NavLink to='/Messages' activeClassName={Styles.active}>Messages</NavLink>
            </div>
            <div className={Styles.item}>
                <NavLink to='/News' activeClassName={Styles.active}>News</NavLink>
            </div>
            <div className={Styles.item}>
                <NavLink to='/Music' activeClassName={Styles.active}>Music</NavLink>
            </div>
            <div className={Styles.item}>
                <NavLink to='/Settings' activeClassName={Styles.active}>Settings</NavLink>
            </div>
        </nav>
    )
}

export default Nav;