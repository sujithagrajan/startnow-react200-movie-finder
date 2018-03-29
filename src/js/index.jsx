import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import reducers from './reducers';
import App from './app';
import { createStore, applyMiddleware, compose } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(promiseMiddleware())));
/* eslint-enable */


render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
);

export default store;