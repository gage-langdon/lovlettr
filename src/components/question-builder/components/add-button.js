import React from 'react';

/*{answers.map(value => (
        <button id={value}>{value}</button>
          <button type="button" disabled={false} onClick={() => onClick(value)}>
      {text}
    </button>
      ))} */

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
        onAnswerSubmit();
      }}
    >
      <label hidden={hidden} onClick={() => onAnswerButtonClick()}>
        {label}
      </label>
      <input
        hidden={!hidden}
        value={answerInputText}
        onChange={e => onAnswerChange(e.target.value)}
      />
    </form>
  );
};
