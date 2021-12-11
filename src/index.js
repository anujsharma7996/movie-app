import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import "./index.css";
import App from "./components/App";
import rootReducer from "./reducers";

// function logger (obj, next, action)
// logger(obj) (next) (action)

// const logger = function ({ dispatch, getState }) {
//   return function (next) {
//     return function (action) {
//       //middleware code
//       console.log("ACTION_TYPE = ", action.type);
//       next(action);
//     };
//   };
// };

const logger =
  ({ dispatch, getstate }) =>
  (next) =>
  (action) => {
    // console.log('ACTION_TYPE=', action.type);
    if (typeof action === "function") {
      console.log("ACTION_TYPE=", action.type);
      // return;
    }
    next(action);
  };

const store = createStore(rootReducer, applyMiddleware(logger, thunk));
// console.log(store);
// console.log("BEFORE State", store.getState());

// store.dispatch({
//   type: "ADD_MOVIES",
//   movies: [{ name: "Superman" }],
// });

// console.log("AFTER State", store.getState());

ReactDOM.render(<App store={store} />, document.getElementById("root"));
