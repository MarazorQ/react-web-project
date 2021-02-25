import React from 'react';
import Post from './Post/Post';

const Posts = () =>{
    return(
        <div>
        My posts
        <div>
            <h2>New posts</h2>
            <textarea></textarea>
            <button>Add post</button>
        </div>
        <Post name="p1" count="15"/>
        <Post name="p2"/>
        <Post name="p3"/>
        </div>
    )
}

export default Posts;