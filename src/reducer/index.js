import {
    GET_PRODUCTS, 
    GET_USER
} from "../actions/types";


const initialState = {
    products: [],
    users: []
}

function rootReducer(state = initialState, { type, payload }) {
    switch (type) {
        case GET_PRODUCTS:
            return {
                ...state,
                products: payload
            }

        case GET_USER:
            return {
                ...state,
                users: payload
            }

         default:
            return {
                ...state,
            };
    }
}

export default rootReducer;