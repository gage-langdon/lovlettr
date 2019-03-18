import React from 'react';
import PropTypes from 'prop-types';

import './button.css';

const Button = ({ text, onClick, className, primary, type }) => (
    <button className={`${primary ? 'button' : ''} ${className}`} type={type} onClick={onClick}>{text}</button>
);

Button.defaultProps = {
    text: '',
    className: '',
    type: 'button',
    primary: false

};

Button.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    className: PropTypes.string,
    primary: PropTypes.bool,
    type: PropTypes.string
};

export default Button;