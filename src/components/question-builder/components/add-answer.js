import React from 'react';
import PropTypes from 'prop-types';

import '../styles.css';

const AddAnswer = ({
  label,
  hidden,
  onAnswerSubmit,
  onAnswerChange,
  answerInputText,
  onAnswerButtonClick,
  answers,
  answerItemCreate,
  disabled
}) => {
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        onAnswerSubmit();
        answers.push(answerItemCreate(answerInputText));
      }}
    >
      <label
        className="add-answer-button"
        hidden={hidden || answers.length === 3}
        onClick={() => (!disabled ? onAnswerButtonClick() : null)}
      >
        {label}
      </label>
      <div className="d-inline-flex flex-column">
        <input
          className="input-answer-field"
          placeholder={'Absolutely!'}
          hidden={!hidden}
          value={answerInputText}
          onChange={e => onAnswerChange(e.target.value)}
          maxLength="18"
        />
        <sub className="sub-text" hidden={!hidden}>
          'enter' to submit
        </sub>
      </div>
    </form>
  );
};

AddAnswer.defaultProps = {
  label: '',
  disabled: true,
  hidden: true,
  answerInputText: '',
  answers: []
};

AddAnswer.propTypes = {
  label: PropTypes.string,
  answerInputText: PropTypes.string,
  onAnswerChange: PropTypes.func,
  onAnswerSubmit: PropTypes.func,
  onAnswerButtonClick: PropTypes.func,
  answers: PropTypes.array,
  answerItemCreate: PropTypes.func,
  disabled: PropTypes.bool
};

export default AddAnswer;
