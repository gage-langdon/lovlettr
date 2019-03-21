import React from 'react';

export default ({
  label,
  hidden,
  onAnswerSubmit,
  onAnswerChange,
  answerInputText,
  onAnswerButtonClick
}) => {
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        onAnswerSubmit(answerInputText);
      }}
    >
      <label hidden={hidden} onClick={() => onAnswerButtonClick()}>
        {label}
      </label>
      <input
        placeholder={'enter answer'}
        hidden={!hidden}
        value={answerInputText}
        onChange={e => onAnswerChange(e.target.value)}
      />
    </form>
  );
};
