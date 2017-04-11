import React, { Component } from 'react';
import { Row, Col, Button } from 'reactstrap';
import { Redirect } from 'react-router-dom';
import loader from './ring.svg';


class Login extends Component {
  constructor(props) {
    super(props);

    this.state = { user: null };

    this.goToApp = this.goToApp.bind(this);
  }

  componentDidMount() {
    if (!localStorage.getItem('erxes_user')) {
      fetch('https://randomuser.me/api/?inc=name,email,registered,picture&nat=us,gb')
        .then(response => response.json())
        .then((data) => {
          const user = data.results[0];
          user.name.first = user.name.first.charAt(0).toUpperCase() + user.name.first.slice(1);
          user.name.last = user.name.last.charAt(0).toUpperCase() + user.name.last.slice(1);
          this.setState({ user });
        });
    }
  }

  goToApp(e) {
    e.preventDefault();

    localStorage.setItem('erxes_user', JSON.stringify(this.state.user));
    this.setState({ redirectToReferrer: true });
  }

  renderUser() {
    const { user } = this.state;

    if (!user) {
      return <img src={loader} alt="loader" />;
    }

    return (
      <div>
        <div className="small-text mb-2">Login as</div>
        <img
          className="picture mb-1"
          src={user.picture.large}
          alt={user.name.first}
        />
        <div className="name">
          {user.name.first} {user.name.last}
        </div>
        <div className="small-text mb-3">{user.email}</div>
        <Button
          onClick={this.goToApp}
          color="primary"
          block
        >
          Login to <strong>getting started</strong>
        </Button>
      </div>
    );
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } };
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer) {
      return <Redirect to={from} />;
    }

    if (localStorage.getItem('erxes_user')) {
      return <Redirect to="/" />;
    }

    return (
      <Row>
        <Col lg={{ size: 4, offset: 4 }}>
          <div className="login-box">
            {this.renderUser()}
          </div>
        </Col>
      </Row>
    );
  }
}

export default Login;
