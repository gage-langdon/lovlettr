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
  answerItemCreate
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
        hidden={hidden}
        onClick={() => onAnswerButtonClick()}
      >
        {label}
      </label>
      <input
        className="input-answer-field"
        placeholder={'Absolutely!'}
        hidden={!hidden}
        value={answerInputText}
        onChange={e => onAnswerChange(e.target.value)}
      />
    </form>
  );
};
