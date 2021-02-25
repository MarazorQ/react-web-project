import React from 'react';
import Styles from './Post.module.css';

const Post = (props) =>{
    // тут в можно писать без фигурных, так как мы находимся за приделами jsx(return), т.е. внутри функции js
    console.log(props.name);
    return(
        <div>
            <div className={Styles.item}>
                {props.name}
                <div>
                    <img src="https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350"></img>
                </div>
                <span>likes: {props.count}</span>
            </div>
        </div>
    )
}

export default Post;