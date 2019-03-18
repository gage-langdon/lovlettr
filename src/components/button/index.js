import React from 'react';
import PropTypes from 'prop-types';

import './button.css';

const Button = ({ text, onClick, className }) => (
    <button className={`button ${className}`} type="button" onClick={onClick}>{text}</button>
);

Button.defaultProps = {
    text: '',
    className: ''
};

Button.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    className: PropTypes.string
};

export default Button;