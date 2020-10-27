import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { createStore, applyMiddleware, compose } from "redux";
import { extraLife } from "./reducers";
import { Provider } from "react-redux";

import { combineEpics, createEpicMiddleware } from "redux-observable";
import * as epics from "./epics";
import { ajax } from "rxjs/ajax";

const rootEpic = combineEpics(...Object.values(epics));
const epicMiddleware = createEpicMiddleware({ dependencies: { ajax } });

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  extraLife,
  composeEnhancers(applyMiddleware(epicMiddleware))
);

epicMiddleware.run(rootEpic);

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
