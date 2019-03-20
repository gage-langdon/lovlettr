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
      <div>
        {answers.map(value => (
          <Label id={value}>{value}</Label>
        ))}
        <AddButton
          text={'+ add answer'}
          value={answerInputText}
          onClick={addAnswer}
        />
      </div>
    </div>
  );
};

export default questionBuilder;
