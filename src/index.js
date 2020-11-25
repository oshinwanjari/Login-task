import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Routes from "./routes";
import history from "./actions/history";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import { Router } from "react-router-dom";

import reportWebVitals from "./reportWebVitals";

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Routes />
    </Router>
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();
