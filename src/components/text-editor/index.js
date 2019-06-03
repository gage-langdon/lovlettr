import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';
import './quill.bubble.css';
var ReactQuill = () => null; // mock for ssr

class TextEditor extends React.Component {
  componentDidMount() {
    // Dynamicly load react-quill because it bind to the dom on load
    // which fails during build
    ReactQuill = require('react-quill').default;
    this.forceUpdate();
  }
  render() {
    const { onLetterChange, placeholder, letterHTML, preview } = this.props;
    return (
      <div className=" d-flex flex-column align-items-center">
        <div
          className={`${
            preview ? 'preview-container' : 'text-editor-container'
          }`}
        >
          <ReactQuill
            theme="bubble"
            placeholder={placeholder}
            onChange={onLetterChange}
            value={letterHTML}
            readOnly={preview}
          />
        </div>
        <sub className="subtext">select text to view formatting</sub>
      </div>
    );
  }
}

TextEditor.defaultProps = {
  value: '',
  placeholder: ''
};
TextEditor.propTypes = {
  letterHTML: PropTypes.string,
  placeholder: PropTypes.string,
  onLetterChange: PropTypes.func
};
export default TextEditor;
