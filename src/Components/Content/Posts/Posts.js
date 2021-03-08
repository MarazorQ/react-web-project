import React from 'react';
import Post from './Post/Post';

const Posts = (props) =>{
    let NewPostItems = props.items.map(items => <Post name={items.name} count={items.countLike}/>)
    let LinkRef = React.createRef()

    let HandleButton = () =>{
        props.addPost()
        //text = LinkRef.current.value = ''
    }
    let HundleChange = () =>{
        let newText = LinkRef.current.value
        console.log(newText)
        props.addNewText(newText)
    }
    return(
        <div>
        My posts
        <div>
            <h2>New posts</h2>
            <textarea onChange={HundleChange} ref={LinkRef} value={props.textValue}></textarea>
            <button onClick={HandleButton} >Add post</button>
        </div>
            {NewPostItems}
        </div>
    )
}

export default Posts;