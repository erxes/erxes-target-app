import React, { Component } from 'react';
import { Row, Col, Button } from 'reactstrap';
import loader from './ring.svg';


class Login extends Component {
  constructor(props) {
    super(props);

    this.state = { user: null };

    this.goToApp = this.goToApp.bind(this);
  }

  componentDidMount() {
    fetch('https://randomuser.me/api/?inc=name,email,registered,picture&nat=us,gb')
      .then(response => response.json())
      .then((data) => {
        this.setState({ user: data.results[0] });
      });
  }

  goToApp(e) {
    e.preventDefault();

    localStorage.setItem('erxes_user', JSON.stringify(this.state.user));
    this.props.router.replace('/');
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
        <div className="small-text mb-2">{user.email}</div>
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
