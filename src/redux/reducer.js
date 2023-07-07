import { ADD_FAV, REMOVE_FAV } from "./action";

const initialState = {
    myFavorites: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAV:
            return {
                ...initialState,
                myFavorites: [...initialState.myFavorites,action.payload]
            }
        case REMOVE_FAV:
            let filterlist = initialState.myFavorites.filter(elm => elm.id !== action.payload);

            return {
                ...initialState,
                myFavorites: filterlist
            }
        default:
            return {...initialState};
    }
}

export default reducer;