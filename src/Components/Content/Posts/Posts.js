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
        <Post/>
        <Post/>
        <Post/>
        </div>
    )
}

export default Posts;