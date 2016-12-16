import React from 'react';
import { Row, Col } from 'reactstrap';


function App({ user }) {
  return (
    <Row>
      <Col>
        <h2 className="mb-2">Instruction:</h2>
        <ul>
          <li>Click Erxes help button below.</li>
          <li>Click on the + button to create new message.</li>
          <li>Send a message.</li>
          <li>
            <a href="https://demo.erxes.io/" target="_blank">Go to the Erxes app</a>{' '}
            and sign in with following account. (Email: demo@erxes.io, Password: demo)
          </li>
          <li>You can find your sent messages in the Inbox.</li>
        </ul>
      </Col>
    </Row>
  );
}

export default App;
