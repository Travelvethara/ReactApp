/**
 * The store is central store for the complete project. Initial stage of the store is set as empty Object(initialState).
 * Middleware provides a way to interact with actions that have been dispatched to the store before they reach the store's reducer.
 */
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import allReducer from "./reducer";

const initialState = {};

const middleware = [thunk];

const store = createStore(
  allReducer,
  initialState,
  applyMiddleware(...middleware)
);

export default store;
