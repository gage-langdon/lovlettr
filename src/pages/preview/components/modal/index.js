import React from 'react';
import Button from '../../../../components/button';
import { Modal } from 'react-bootstrap';

import './modal.css';
export default ({ letterId, show, setShow }) => {
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
          <button
            className="text-muted pr-2"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              outlineStyle: 'none'
            }}
            onClick={() => setShow(!show)}
          >
            Close
          </button>
          <Button
            onClick={() =>
              navigator.clipboard.writeText(
                `https://lovlettr.com/letter/${letterId}`
              )
            }
            className="ml-2"
            primary
            text="Copy"
          />
        </div>
      </Modal.Footer>
    </Modal>
  );
};

{
  /* <Button
            className="mb-4"
            primary
            text="Send"
            onClick={async () =>
              ltr
                ? setShow(!show)
                : (setLtr(
                    await postLtr({
                      userEmail,
                      letterHTML,
                      questionInputText,
                      answers
                    })
                  ),
                  setShow(!show))
            }
          /> */
}
