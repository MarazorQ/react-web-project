import React from 'react';
import Styles from './Content.module.css';
import Posts from './Posts/Posts';
import ContentInf from "./ContentInf/ContentInf";

const Content = (props) =>{
    return(
        <div className={Styles.content}>
            <ContentInf/>
            <Posts items={props.itemsContent.PostsItems} addPost={props.addPosts}/>
        </div>
    )
}

export default Content;