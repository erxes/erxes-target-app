import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import App from './App';
import Login from './Login';
import './style.css';


function requireAuth(nextState, replace) {
  if (!localStorage.getItem('erxes_demoapp_user')) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App} onEnter={requireAuth} />
    <Route path="login" component={Login} />
  </Router>
), document.getElementById('root'));
