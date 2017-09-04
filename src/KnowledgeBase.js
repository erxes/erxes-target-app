import React, { Component } from 'react';
import { Row, Col, Button } from 'reactstrap';
import { Redirect } from 'react-router-dom';
import loader from './ring.svg';


class KnowledgeBase extends Component {
  constructor(props) {
    super(props);

    window.erxesSettings = {
      knowledgeBase: {
        topic_id: "K7oAS2hCSh2NLnQhp",
      },
    };

    (() => {
      var script = document.createElement('script');
      script.src = process.env.REACT_APP_WIDGET_URL;
      script.src = process.env.REACT_APP_KNOWLEDGEBASE_WIDGET_URL;
      script.async = true;

      var entry = document.getElementsByTagName('script')[0];
      entry.parentNode.insertBefore(script, entry);
    })();
  }

  // componentDidMount() {
  //   if (!localStorage.getItem('erxes_user')) {
  //     fetch('https://randomuser.me/api/?inc=name,email,registered,picture&nat=us,gb')
  //       .then(response => response.json())
  //       .then((data) => {
  //         const user = data.results[0];
  //         user.name.first = user.name.first.charAt(0).toUpperCase() + user.name.first.slice(1);
  //         user.name.last = user.name.last.charAt(0).toUpperCase() + user.name.last.slice(1);
  //         this.setState({ user });
  //       });
  //   }
  // }

  // renderUser() {
  //   const { user } = this.state;
  //
  //   if (!user) {
  //     return <img src={loader} alt="loader" />;
  //   }
  //
  //   return (
  //     <div>
  //       <div className="small-text mb-2">Login as</div>
  //       <img
  //         className="picture mb-1"
  //         src={user.picture.large}
  //         alt={user.name.first}
  //       />
  //       <div className="name">
  //         {user.name.first} {user.name.last}
  //       </div>
  //       <div className="small-text mb-3">{user.email}</div>
  //       <Button
  //         onClick={this.goToApp}
  //         color="primary"
  //         block
  //       >
  //         Login to <strong>getting started</strong>
  //       </Button>
  //     </div>
  //   );
  // }

  render() {
    return null;
  }
}

export default KnowledgeBase;
