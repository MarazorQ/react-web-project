import store from './Redux/State'
import React from 'react';
import { render } from 'react-dom';
import App from './Components/App';
import './Components/App.css';

let rerenderEntireTree = (state) => {
    render(<App state={state} addPost={store.addNewPost.bind(store)} addNewText={store.addNewText.bind(store)}/>, document.getElementById('root'));
}

rerenderEntireTree(store.getState());
store.subscriber(rerenderEntireTree)