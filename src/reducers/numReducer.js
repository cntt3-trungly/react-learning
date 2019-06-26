const numInitialState = ["man hinh", "ban phim", "chuot"];
const numReducer = (state = numInitialState, action) => {
    switch (action.type) {
        case "ADD_NEW":
            return [...state, action.phantumoi]
        case "DELETE":
            return [state.filter((value, key) => key !== action.index)]
        default:
            return state
    }
}
export default numReducer