import {
    GET_HISTORY,
    GET_PRODUCTS, 
    GET_USER,
    ORDER_BY_PRICE,
    GET_ALL_PRODUCTS
} from "../actions/types";


const initialState = {
    products: [],
    allProducts: [],
    users: [],
    history: []
}

function rootReducer(state = initialState, { type, payload }) {
    switch (type) {
        case GET_PRODUCTS:
            return {
                ...state,
                products: payload
            }

            case GET_ALL_PRODUCTS:
            return {
                ...state,
                allProducts: payload,
                products: payload
            }

        case GET_USER:
            return {
                ...state,
                users: payload
            }

        case ORDER_BY_PRICE:
         let priceArr =
          payload === "+P"
            ? state.products.sort(function (a, b) {
                if (a.cost > b.cost) {
                  return -1;
                }
                if (b.cost > a.cost) {
                  return 1;
                }
                return 0;
              })
            : state.products.sort(function (a, b) {
                if (a.cost > b.cost) {
                  return 1;
                }
                if (b.cost > a.cost) {
                  return -1;
                }
                return 0;
              });
              console.log(priceArr)
        return {
          ...state,
          products: priceArr,
        };

        case GET_HISTORY:
          return {
            ...state,
            history: payload
          }
      

         default:
            return {
                ...state,
            };
    }
}

export default rootReducer;