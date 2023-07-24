import axios from "axios";
export const ADD_FAV = 'ADD_FAV';
export const REMOVE_FAV = 'REMOVE_FAV';
export const FILTER = 'FILTER';
export const ORDER = 'ORDER';
export const RESET = 'RESET';

// export const addFav = (per) => {
//     return {
//         type: ADD_FAV,
//         payload: per
//     }
// }

export const addFav = (character) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav';
    return async (dispatch) => {
        // axios.post(endpoint, character).then(({ data }) => {
        //     return dispatch({
        //         type: 'ADD_FAV',
        //         payload: data,
        //     });
        // });

        try {
            const resp = await axios.post(endpoint, character);
            const { data } = resp;

            return dispatch({
                type: 'ADD_FAV',
                payload: data,
            });
        } catch (error) {
            window.alert(error.message);
        }
    };
};

// export const removeFav = (id) => {
//     return {
//         type: REMOVE_FAV,
//         payload: id
//     }
// }

export const removeFav = (id) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
    return async (dispatch) => {
        // axios.delete(endpoint).then(({ data }) => {
        //     return dispatch({
        //         type: 'REMOVE_FAV',
        //         payload: data,
        //     });
        // });

        try {
            const resp = await axios.delete(endpoint);
            const { data } = resp;

            return dispatch({
                type: 'REMOVE_FAV',
                payload: data,
            });
        } catch (error) {
            window.alert(error.message);
        }
    };
};


export const filterCards = (gender) => {
    return {
        type: FILTER,
        payload: gender
    }
}

export const orderCards = (ord) => {
    return {
        type: ORDER,
        payload: ord
    }
}

export const reset = () => {
    return {
        type: RESET
    }
}