import React from 'react';
import './button.css';
import PropTypes from 'prop-types';

const style = {
    height: '45px',
    width: '149px',
    backgroundColor: '#FF6584',
    color: '#FFFFFF',
    fontFamily: 'Railway',
    fontSize: '20px',
    borderRadius: '17px',
    outline: 'none'
}
const Button = ({ text, onClick }) => (
    <button style={style} onClick={onClick}>{text}</button>
);

Button.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func
}

export default Button;