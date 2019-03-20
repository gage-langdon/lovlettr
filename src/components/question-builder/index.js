import React from 'react';

//components
import QuestionInput from './components/question-input';
import AnswerInput from './components/answer-input';

const questionBuilder = () => {
  return (
    <div>
      <QuestionInput />
      <AnswerInput />
    </div>
  );
};

export default questionBuilder;
