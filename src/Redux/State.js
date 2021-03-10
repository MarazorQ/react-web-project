// like redux
let store = {
    _state: {
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
            ],
            newStateText: 'input...',
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
    },
    getState(){
        return this._state
    },
    _rerenderEntireTree(){
        console.log('fdefd')
    },
    addNewPost(){
        let newPost = {
            id: 14, name: this._state.Content.newStateText, countLike: 1122
        }
        this._state.Content.PostsItems.push(newPost)
        this._state.Content.newStateText = ' '
        this._rerenderEntireTree(this._state)
    },
    addNewText(text){
        this._state.Content.newStateText = text
        this._rerenderEntireTree(this._state)
    },
    //pattern - observer(listner)
    subscriber(observer){
        this._rerenderEntireTree = observer
    }
}

export default store
