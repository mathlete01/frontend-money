import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, compose } from "redux";
import { stepReducer } from "./reducers/stepReducer.js";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer.js";
import { BrowserRouter } from "react-router-dom";
import "./style/fonts/Spartan-Regular.ttf"
import "./style/fonts/Spartan-SemiBold.ttf"
import TestTooltip from "./components/steps/TestTooltip.js";

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk),
  // other store enhancers if any
);
const store = createStore(rootReducer, enhancer);

ReactDOM.render(
  <React.StrictMode>
    {/* Provider is a component that wraps around our App component. It does two things: (1) it will alert our Redux app when there has been a change in state, and this will re-render our React app. Here we pass our store instance into Provider as a prop, making it available to all our other components. */}
    <Provider store={store}>
      <BrowserRouter>
        {/* <App /> */}
        <TestTooltip />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
