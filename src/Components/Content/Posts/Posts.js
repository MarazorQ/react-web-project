import React from 'react';
import Post from './Post/Post';

const Posts = (props) =>{
    let NewPostItems = props.items.map(items => <Post name={items.name} count={items.countLike}/>)
    let LinkRef = React.createRef()
    let HandleButton = () =>{
        let text = LinkRef.current.value;
        props.addPost(text)
    }
    return(
        <div>
        My posts
        <div>
            <h2>New posts</h2>
            <textarea ref={LinkRef}></textarea>
            <button onClick={HandleButton} >Add post</button>
        </div>
            {NewPostItems}
        </div>
    )
}

export default Posts;