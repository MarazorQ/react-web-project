import React from 'react';
import { render } from 'react-dom';
import App from './Components/App';
import './Components/App.css';

export let rerenderEntireTree = (state) => {
    render(<App state={state}/>, document.getElementById('root'));
}
