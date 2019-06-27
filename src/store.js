import { noteData } from './firebaseConnect'

var redux = require('redux');
var store = redux.createStore(allReducer);
const noteInitialState = {}
const allReducer = (state = noteInitialState, action) => {
    switch (action.type) {
        case "ADD_DATA":
            return state
        case ACTION_TYPE_2:
            return state
        default:
            return state
    }
}