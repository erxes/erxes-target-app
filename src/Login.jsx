import React, { Component } from 'react';
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

    localStorage.setItem('erxes_demoapp_user', JSON.stringify(this.state.user));
    this.props.router.replace('/');
  }

  renderUser() {
    const { user } = this.state;

    if (!user) {
      return <img src={loader} alt="loader" />;
    }

    return (
      <div>
        <img
          className="picture"
          src={user.picture.large}
          alt={user.name.first}
        />
        <div className="small-text">Login as</div>
        <div className="name">
          {user.name.first} {user.name.last}
        </div>
        <a
          className="erxes-btn block"
          href="#"
          onClick={this.goToApp}
        >
          Login
        </a>
      </div>
    );
  }

  render() {
    return (
      <div>
        <h1>App for erxes demo</h1>

        <div className="login-box">
          {this.renderUser()}
        </div>

        <a href="http://erxes.io/" className="small-text">&laquo; Go to home page</a>
      </div>
    );
  }
}

export default Login;
