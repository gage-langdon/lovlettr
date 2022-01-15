import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../button';
import '../styles.css';
/* eslint-disable */
const AddAnswer = ({
  label,
  hidden,
  onAnswerSubmit,
  onAnswerChange,
  answerInputText,
  onAnswerButtonClick,
  answers,
  answerItemCreate,
  disabled,
  questionInputText
}) => {
  return (
    <div>
      <label
        className="add-answer-button"
        disabled={questionInputText === ''}
        hidden={hidden || answers.length === 3}
        onClick={() => (!disabled ? onAnswerButtonClick() : null)}
      >
        {label}
      </label>
      <div hidden={!hidden}>
        <form
          onSubmit={e => {
            e.preventDefault();
            if (answerInputText !== '') {
              onAnswerSubmit(answerItemCreate(answerInputText));
            }
          }}
        >
          {!hidden ? null : (
            <div className="d-inline-flex flex-row">
              <input
                className="input-answer-field"
                autoFocus={true}
                placeholder={'Absolutely!'}
                value={answerInputText}
                onChange={e => onAnswerChange(e.target.value)}
                maxLength="18"
              />
              <Button
                className="button-submit"
                type="submit"
                text="Submit"
                disabled={answerInputText === ''}
              />
            </div>
          )}
        </form>
      </div>
    </div>
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
