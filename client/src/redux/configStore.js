import { applyMiddleware, combineReducers, createStore } from "redux";
import reduxThunk from "redux-thunk";
import AuthReducer from "./Reducers/AuthReducer";
import PostReducer from "./Reducers/PostReducer";

const rootReducers = combineReducers({
  //Store to place all reducers of application
  AuthReducer,
  PostReducer,
});

export const store = createStore(rootReducers, applyMiddleware(reduxThunk));
