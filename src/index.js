import React from 'react';
import { render } from 'react-dom';
import App from './Components/App';
import './Components/App.css';
import  state from './Redux/State'

// let DialogItems = [
//     {id: 1, name: 'Artem'},
//     {id: 2, name: 'gena'},
//     {id: 3, name: 'Apasha'},
//     {id: 4, name: 'dasa'},
//     {id: 5, name: 'vas'},
//     {id: 6, name: 'Ar'},
//     {id: 62, name: 'Arda'},
//     {id: 622, name: 'DEMA'}
// ]
// let MessageItems = [
//     {id: 1, message: 'hi'},
//     {id: 2, message: 'How are you'},
//     {id: 3, message: 'by by'},
//     {id: 3, message: 'by byasdadsasddas'},
//     {id: 3, message: 'by byasdadsasddas'}
// ]
// let PostsItems = [
//     {id: 1, name: 'p1', countLike: 112},
//     {id: 2, name: 'p2', countLike: 1},
//     {id: 3, name: 'p3', countLike: 12},
//     {id: 2, name: 'p2sadasdads', countLike: 122222},
//     {id: 3, name: 'BWM', countLike: 22}
// ]

render(<App state={state}/>, document.getElementById('root'));