import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.bubble.css';

const TextEditor = ({ value, onChange }) => {
  return (
    <div className="text-editor-container d-flex flex-column">
      <div className="p-3">
        <ReactQuill theme="bubble" value={value} onChange={onChange} />
      </div>
      <small className="text-muted mx-auto mt-auto pb-2">
        Select text to view formatting
      </small>
    </div>
  );
};

TextEditor.defaultProps = {
  value:
    '<p>Hello <strong>Beautiful</strong>,</p><p><br></p><p>I hope your day is going well!</p><p> </p><p><br></p>'
};
TextEditor.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired
};
export default TextEditor;
