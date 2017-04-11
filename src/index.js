import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Layout from './Layout';
import App from './App';
import Login from './Login';
import './style.css';


const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    localStorage.getItem('erxes_user')
      ? <Component {...props} />
      : <Redirect to={{ pathname: '/login', state: { from: props.location }}} />
  )}/>
)

ReactDOM.render((
  <Router>
    <Layout>
      <PrivateRoute exact path="/" component={App} />
      <Route path="/login" component={Login} />
    </Layout>
  </Router>
), document.getElementById('root'));
