import { ADD_FAV, REMOVE_FAV, FILTER, ORDER, RESET } from "./action";

const initialState = {
    myFavorites: [],
    allCharacters: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAV:
            const copy = [...state.allCharacters,action.payload]
            return {
                ...state,
                myFavorites: copy,
                allCharacters: [...copy], 
            }
        case REMOVE_FAV:
            let filterlist = state.myFavorites.filter(elm => elm.id !== action.payload);

            return {
                ...state,
                myFavorites: filterlist
            }
        case FILTER: 
            
            let filter = state.allCharacters.filter(elm => elm.gender === action.payload);

            return {
                ...state,
                myFavorites: filter
            }
        case ORDER:
            let order = state.allCharacters

            if (action.payload === 'A') {
                order.sort((a,b)=>a.id-b.id);
            } else {
                order.sort((a,b)=>b.id-a.id);
            }

            return {
                ...state,
                myFavorites: order
            }
        case RESET:
            return {
                ...state,
                myFavorites: state.allCharacters
            }

        default:
            return {...state};
    }
}

export default reducer;