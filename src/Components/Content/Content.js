import React from 'react';
import Styles from './Content.module.css';
import Posts from './Posts/Posts';
import ContentInf from "./ContentInf/ContentInf";

const Content = () =>{
    return(
        <div className={Styles.content}>
            <ContentInf/>
            <Posts/>
        </div>
    )
}

export default Content;