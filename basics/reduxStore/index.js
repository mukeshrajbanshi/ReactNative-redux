import rootReducer from "../reducers/index";
import { createLogger } from "redux-logger";
import { applyMiddleware, legacy_createStore as createStore } from "redux";
import  thunk  from "redux-thunk";

const middleware = [thunk];

if (process.env.NODE_ENV === "development") {
  //staging, development, production
  middleware.push(createLogger());
}

const store = createStore(rootReducer, applyMiddleware(...middleware));

export default store;
