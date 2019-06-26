import React, { Component } from 'react';

class App extends Component {

  render() {
    var redux = require('redux');
    var oldState = {
      num: ["man hinh", "ban phim", "chuot"],
      editStatus: true
    }
    var reducer1 = (state = oldState, action) => {
      switch (action.type) {
        case "CHANGE_EDIT_STATUS":
          return { ...state, editStatus: !state.editStatus }
          break;
        case "ADD_NEW":
          return { ...state, num:[...state.num,action.phantumoi] }
          break;

        default:
          break;
      }
      return state;
    }
    var store1 = redux.createStore(reducer1);
    store1.dispatch({ type: "CHANGE_EDIT_STATUS" });
    store1.dispatch({
      type:"ADD_NEW",
      phantumoi:"Tai Nghe"
    })
    console.log(store1.getState());
    


    return (
      <div>

      </div>
    );
  }
}

export default App;
