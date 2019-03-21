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
  addAnswer,
  answers
}) => {
  return (
    <div>
      <div>
        <Label>Question</Label>
        <InputField onChange={onQuestionChange} value={questionInputText} />
      </div>
      <div>
        <Label>Answer</Label>
        <InputField onChange={onAnswerChange} value={answerInputText} />
      </div>
      <AddButton
        text={'+ add answer'}
        value={answerInputText}
        onClick={addAnswer}
      />
    </div>
  );
};

export default questionBuilder;
