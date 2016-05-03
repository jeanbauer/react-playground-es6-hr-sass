import React from 'react';
import { render } from 'react-dom';
import App from './App/App.js'
import { Router, Route, browserHistory } from 'react-router';
import './index.scss';

render(
  <Router history={browserHistory}>
    <Route path="/" component={App} />
  </Router>,
  document.getElementById('app')
);
