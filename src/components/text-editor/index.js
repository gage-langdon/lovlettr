import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';
import 'react-quill/dist/quill.bubble.css';
var ReactQuill = () => null; // mock for ssr

class TextEditor extends React.Component {
  componentDidMount() {
<<<<<<< HEAD
    console.log('HIT HIT HIT HIT');
=======
    const { onChange, placeholder, value } = this.props;
>>>>>>> 715a2a6cfe1cc70083ee9f5797cc4c75d27cc9eb
    // Dynamicly load react-quill because it bind to the dom on load
    // which fails during build
    console.log(document);
    ReactQuill = require('react-quill').default;
    this.forceUpdate();

    // Set placeholder if exists
    if (!value && placeholder && onChange) onChange(placeholder);
  }
  onChange(strVal = '') {
    // Empty text editor still has some html scaffolding so we must clean it out in order to check if empty
    const isLetterEmpty = !Boolean(strVal.replace(/<\/?[^>]+(>|$)/g, ''));

    // Logic outside of this component may rely on empty value so its
    // best to send back empty from here instead of filtering html outside
    if (isLetterEmpty) strVal = '';
    this.props.onChange(strVal);
  }
  render() {
    const { value } = this.props;
    return (
      <div className=" d-flex flex-column">
        <div className="p-3">
          <ReactQuill
            theme="bubble"
            value={value}
            onChange={val => this.onChange(val)}
          />
        </div>
      </div>
    );
  }
}

TextEditor.defaultProps = {
  value: '',
  placeholder: ''
};
TextEditor.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired
};
export default TextEditor;
