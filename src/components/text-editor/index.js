import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';
import 'react-quill/dist/quill.bubble.css';
var ReactQuill = () => null; // mock for ssr

class TextEditor extends React.Component {
  componentDidMount() {
    console.log('HIT HIT HIT HIT');
    // Dynamicly load react-quill because it bind to the dom on load
    // which fails during build
    console.log(document);
    ReactQuill = require('react-quill').default;
    this.forceUpdate();
  }
  render() {
    const { value, onChange } = this.props;
    return (
      <div className=" d-flex flex-column">
        <div className="p-3">
          <ReactQuill theme="bubble" value={value} onChange={onChange} />
        </div>
      </div>
    );
  }
}

TextEditor.defaultProps = {
  value: ''
};
TextEditor.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired
};
export default TextEditor;
