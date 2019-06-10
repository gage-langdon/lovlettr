import React from 'react';
import { Modal, Button } from 'react-bootstrap';

import './modal.css';
export default ({ letterId }) => {
  function clipboard() {
    Navigator.clipboard.write(`https://lovlettr.com/letter/${letterId}`);
  }

  return (
    <Modal show={letterId !== ''}>
      <Modal.Header>
        <Modal.Title>Your letter is ready!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <sub>Letter url:</sub>
        <input
          disabled
          className="url-container"
          value={`https://lovlettr.com/letter/${letterId}`}
        />
      </Modal.Body>
      <Modal.Footer className="d-flex justify-content-between">
        <p>Copy the url and send it!</p>
        <div>
          <Button variant="secondary">Close</Button>
          <Button className="ml-2" variant="primary">
            Copy
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
};
