import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Layout from './Layout';
import App from './App';
import Login from './Login';
import KnowledgeBase from './KnowledgeBase';
import './style.css';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const user = JSON.parse(localStorage.getItem('erxes_user'));
  return (<Route {...rest} render={props => (
    user
      ? <Component {...props} user={user} />
      : <Redirect to={{ pathname: '/login', state: { from: props.location }}} />
  )}/>);
}

ReactDOM.render((
  <Router>
    <Layout>
      <PrivateRoute exact path="/" component={App} />
      <Route path="/login" component={Login} />
      <Route path="/knowledgeBase" component={KnowledgeBase} />
    </Layout>
  </Router>
), document.getElementById('root'));
