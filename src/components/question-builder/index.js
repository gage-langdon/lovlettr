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
  hiddenAddAnswer
}) => {
  return (
    <div>
      <div>
        <Label>Question</Label>
        <InputField onChange={onQuestionChange} value={questionInputText} />
      </div>
      <AddButton
        label={'Button'}
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
