import React from 'react';
import { Modal, Button } from 'react-bootstrap';

import './modal.css';
export default ({ letterId, show, setShow }) => {
  function copyToClipboard() {
    const copyText = document.getElementById('url');
    copyText.select();
    document.execCommand('copy');
  }

  return (
    <Modal show={show}>
      <Modal.Header>
        <Modal.Title>Your letter is ready!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <sub>Letter url:</sub>
        <input
          type="text"
          disabled
          className="url-container"
          value={`https://lovlettr.com/letter/${letterId}`}
          id="url"
        />
      </Modal.Body>
      <Modal.Footer className="d-flex justify-content-between">
        <p>Copy the url and send it!</p>
        <div>
          <Button onClick={() => setShow(!show)} variant="secondary">
            Close
          </Button>
          <Button
            onClick={() => copyToClipboard()}
            className="ml-2"
            variant="primary"
          >
            Copy
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
};
