import React from 'react';
import { Row, Col } from 'reactstrap';

function App({ user }) {
  return (
    <Row>
      <Col>
        <div className="instruction">
          <h2 className="mb-2">Instruction</h2>
          <ul>
            <li>Click Erxes help button below.</li>
            <li>To create a new message click on the [+] button.</li>
            <li>Send a message.</li>
            <li>
              <a href="https://demo.erxes.io/" target="_blank">
                Go to the Erxes app
              </a>{' '}
              and sign in with following account. (Email: demo@erxes.io,
              Password: demo)
            </li>
            <li>You can find your sent messages in the Inbox.</li>
          </ul>
        </div>
      </Col>
    </Row>
  );
}

export default App;
