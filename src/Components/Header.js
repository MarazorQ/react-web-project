import React from 'react';
import Styles from './Header.module.css';

export default function Header(){
    return(
        <header className={Styles.header}>
            <img src='https://www.freelogodesign.org/Content/img/logo-ex-7.png' />
        </header>
    )
}