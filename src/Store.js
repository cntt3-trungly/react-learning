var redux = require('redux');
    var oldState = {
      num: ["man hinh", "ban phim", "chuot"],
      editStatus: true
    }
    var reducer1 = (state = oldState, action) => {
      switch (action.type) {
        case "CHANGE_EDIT_STATUS":
          return { ...state, editStatus: !state.editStatus }
        case "ADD_NEW":
          return { ...state, num: [...state.num, action.phantumoi] }
        case "DELETE":
          return { ...state, num: state.num.filter((value, key) => key !== action.index) }
        default:
          return state;
      }

    }
    var store1 = redux.createStore(reducer1);
    store1.subscribe(() => {
      console.log(JSON.stringify(store1.getState()));

    })
    store1.dispatch({ type: "CHANGE_EDIT_STATUS" });
    store1.dispatch({
      type: "ADD_NEW",
      phantumoi: "Tai Nghe"
    })
    store1.dispatch({
      type: "DELETE",
      index: 1
    })
export default store1;