import React from 'react';
import '../styles.css';

export default ({
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
        />
        <sub className="sub-text" hidden={!hidden}>
          'enter' to submit
        </sub>
      </div>
    </form>
  );
};
