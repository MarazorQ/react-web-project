import React from 'react';
import Post from './Post/Post';

const Posts = (props) =>{
    let NewPostItems = props.items.map(items => <Post name={items.name} count={items.countLike}/>)
    return(
        <div>
        My posts
        <div>
            <h2>New posts</h2>
            <textarea></textarea>
            <button>Add post</button>
        </div>
            {NewPostItems}
        </div>
    )
}

export default Posts;