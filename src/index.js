import  state from './Redux/State'
import {subscriber} from "./Redux/State";
import React from 'react';
import { render } from 'react-dom';
import App from './Components/App';
import './Components/App.css';

let rerenderEntireTree = (state) => {
    render(<App state={state}/>, document.getElementById('root'));
}

rerenderEntireTree(state);
subscriber(rerenderEntireTree)