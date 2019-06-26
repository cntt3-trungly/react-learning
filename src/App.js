import React, { Component } from 'react';

class App extends Component {
  
  render() {
    var redux = require('redux');
    var oldState= {
      num :["man hinh","ban phim","chuot"],
      editStatus: true
    }
    var reducer1 =(state=oldState,action)=>{
      switch (action.type) {
        case "CHANGE_EDIT_STATUS":
          return {...state,editStatus:!state.editStatus}          
          break;
      
        default:
          break;
      }
      return state;
    }
    var store1 = redux.createStore(reducer1);
    store1.dispatch({type:"CHANGE_EDIT_STATUS"});
    console.log(store1.getState());
    

    return (
      <div>
        
      </div>
    );
  }
}

export default App;
