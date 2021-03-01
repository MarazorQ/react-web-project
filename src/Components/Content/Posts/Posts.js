import React from 'react';
import Post from './Post/Post';

const Posts = () =>{
    let PostsItems = [
        {id: 1, name: 'p1', countLike: 112},
        {id: 2, name: 'p2', countLike: 1},
        {id: 3, name: 'p3', countLike: 12},
        {id: 2, name: 'p2sadasdads', countLike: 122222}
    ]
    let NewPostItems = PostsItems.map(items => <Post name={items.name} count={items.countLike}/>)
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