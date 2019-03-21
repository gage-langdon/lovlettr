import React from 'react';

//components
import InputField from '../input-field';
import Label from '../label';
import AddButton from './components/add-button';

const questionBuilder = ({
  onQuestionChange,
  questionInputText,
  onAnswerChange,
  answerInputText,
  onAnswerSubmit,
  onAnswerButtonClick,
  hiddenAddAnswer,
  answers
}) => {
  return (
    <div>
      <div>
        <Label>Question</Label>
        <InputField
          placeholder={'enter question'}
          onChange={onQuestionChange}
          value={questionInputText}
        />
      </div>
      {answers.length === 0
        ? null
        : answers.map(value => <label key={value}>{value}</label>)}
      <AddButton
        label={'+ add answer'}
        hidden={hiddenAddAnswer}
        answerInputText={answerInputText}
        onAnswerChange={onAnswerChange}
        onAnswerSubmit={onAnswerSubmit}
        onAnswerButtonClick={onAnswerButtonClick}
      />
    </div>
  );
};

export default questionBuilder;
