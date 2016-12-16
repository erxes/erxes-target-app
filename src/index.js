import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Layout from './Layout';
import App from './App';
import Login from './Login';
import './style.css';


function requireAuth(nextState, replace) {
  if (!localStorage.getItem('erxes_user')) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={App} onEnter={requireAuth} />
      <Route path="login" component={Login} />
    </Route>
  </Router>
), document.getElementById('root'));
