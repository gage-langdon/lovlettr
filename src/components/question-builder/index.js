import React from 'react';

//components
import InputField from '../input-field';
import Label from '../label';
import AddButton from './components/add-answer';
import './styles.css';
//modules
const uuidv1 = require('uuid/v1');

const questionBuilder = ({
  onQuestionChange,
  questionInputText,
  onAnswerChange,
  answerInputText,
  onAnswerSubmit,
  onAnswerButtonClick,
  hiddenAddAnswer,
  answers,
  setAnswerArray
}) => {
  const answerItemCreate = text => {
    const item = { text: text, id: uuidv1() };
    return item;
  };

  const answerItemDelete = id => {
    const filteredArray = answers.filter(item => item.id !== id);
    setAnswerArray(filteredArray);
  };

  return (
    <div>
      <div>
        <Label cursive>Question</Label>
        <InputField
          className="input-question-field"
          placeholder={'Will you go on a date with me?'}
          onChange={onQuestionChange}
          value={questionInputText}
        />
      </div>
      <div className="answer-container">
        <div className="d-flex flex-column">
          {answers.length === 0
            ? null
            : answers.map(item => (
                <label
                  className="answer-item"
                  key={item.id}
                  onClick={() => answerItemDelete(item.id)}
                >
                  {item.text}
                </label>
              ))}
        </div>
        <AddButton
          label={'+ add answer'}
          hidden={hiddenAddAnswer}
          answerInputText={answerInputText}
          onAnswerChange={onAnswerChange}
          onAnswerSubmit={onAnswerSubmit}
          onAnswerButtonClick={onAnswerButtonClick}
          answers={answers}
          answerItemCreate={answerItemCreate}
        />
      </div>
    </div>
  );
};

export default questionBuilder;
