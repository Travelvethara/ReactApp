/**
 * In reducer.js, We defined a reducer functions.
 * The reducer is a pure function that takes the previous state and an action, and returns the next state.
 */
import { combineReducers } from "redux";
const initialState = {};

/**
 * Related to products, We define all the reducers under this function.
 * For example, In future if we need a reducer function like get price mean, We can use this function.
 * ------
 * @param ...args {Object} state
 * @param ...args {object} initialState
 * @param ...args {object} action
 * @public ...args
 */
const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_PRODUCTS":
      return {
        ...action.payload
      };
    default:
      return state;
  }
};

/**
 * Related to Wishlist page, We define all the reducers under this wishlistReducer function.
 * ------
 * @param ...args {Object} state
 * @param ...args {object} initialState
 * @param ...args {object} action
 * @public ...args
 */

const wishlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_WISHLIST":
      return {
        ...action.payload
      };
    case "FETCH_WISHLIST":
      return {
        ...action.payload
      };
    default:
      return state;
  }
};

/**
 * The name combineReducers is based on react-redux concept.
 * Using combineReducers, we can combine multiple reducers to single reducer object.
 */
export default combineReducers({
  products: productReducer,
  wishlist: wishlistReducer
});
