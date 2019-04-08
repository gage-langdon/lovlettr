import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../button';
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
        if (answerInputText !== '') {
          answers.push(answerItemCreate(answerInputText));
          onAnswerSubmit();
        }
      }}
    >
      <label
        className="add-answer-button"
        hidden={hidden || answers.length === 3}
        onClick={() => (!disabled ? onAnswerButtonClick() : null)}
      >
        {label}
      </label>
      <div hidden={!hidden}>
        <div className="d-inline-flex flex-row">
          <input
            className="input-answer-field"
            placeholder={'Absolutely!'}
            value={answerInputText}
            onChange={e => onAnswerChange(e.target.value)}
            maxLength="18"
          />
          <Button
            className="button-secondary"
            text="Submit"
            onClick={() => {
              if (answerInputText !== '') {
                answers.push(answerItemCreate(answerInputText));
                onAnswerSubmit();
              }
            }}
          />
        </div>
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
