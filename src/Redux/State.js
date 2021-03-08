import {rerenderEntireTree} from '../render';
let state = {
    Content: {
        PostsItems: [
            {id: 1, name: 'p1', countLike: 112},
            {id: 2, name: 'p2', countLike: 1},
            {id: 3, name: 'p3', countLike: 12},
            {id: 2, name: 'p2sadasdads', countLike: 122222},
            {id: 3, name: 'BWM', countLike: 22},
            {id: 2, name: 'p2sadasdadsWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW', countLike: 122222},
            {id: 3, name: 'BWMWWWWWWWWWWWWWWWWW', countLike: 22},
            {id: 3, name: 'Audi', countLike: 22}
        ]
    },
    Messages: {
        MessageItems: [
            {id: 1, message: 'hi'},
            {id: 2, message: 'How are you'},
            {id: 3, message: 'by by'},
            {id: 3, message: 'by byasdadsasddas'},
            {id: 3, message: 'by byasdadsasddas'},
            {id: 1, message: 'hi'},
            {id: 2, message: 'How are you'},
            {id: 3, message: 'by by'},
            {id: 3, message: 'by byasdadsasddas'},
            {id: 3, message: 'by byasdadsasddas'},
            {id: 3, message: 'HELOO WORLD'}
        ],
        DialogItems: [
            {id: 1, name: 'Artem'},
            {id: 2, name: 'gena'},
            {id: 3, name: 'Apasha'},
            {id: 4, name: 'dasa'},
            {id: 5, name: 'vas'},
            {id: 6, name: 'Ar'},
            {id: 62, name: 'Arda'},
            {id: 622, name: 'DEMA'},
        ]
    }
}
export let addNewPost = (data) =>{
    let newPost = {
        id: 14, name: data, countLike: 1122
    }
    state.Content.PostsItems.push(newPost);
    rerenderEntireTree(state)
}

export default state
