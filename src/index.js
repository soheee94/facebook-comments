import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension"; // 리덕스 개발자 도구
import ReduxThunk from "redux-thunk";
import comments from "./modules/comments";
import { Provider } from "react-redux";
import { saveState } from "./localStorage";

const store = createStore(comments, composeWithDevTools(applyMiddleware(ReduxThunk, logger)));
store.subscribe(() => {
  saveState(store.getState());
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
