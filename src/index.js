import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {Router, Route, IndexRoute, browserHistory } from 'react-router'; 
import './index.css';

import App from './App';

import reducers from './reducers';
import Signin from './components/auth/signin'; 

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory} > 
      <Route path="/" component={App} >
        <Route path="signin" component={Signin} /> 
      </Route> 
    </Router> 
  </Provider>
  , document.getElementById('root'));
