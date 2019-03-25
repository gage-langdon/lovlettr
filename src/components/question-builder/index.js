import React from 'react';
import PropTypes from 'prop-types';

//components
import InputField from '../input-field';
import Label from '../label';
import AddAnswer from './components/add-answer';
import './styles.css';
//modules
const uuidv1 = require('uuid/v1');

const QuestionBuilder = ({
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
          disabled={!(answers.length === 0)}
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
        <AddAnswer
          label={'+ add answer'}
          hidden={hiddenAddAnswer}
          answerInputText={answerInputText}
          onAnswerChange={onAnswerChange}
          onAnswerSubmit={onAnswerSubmit}
          onAnswerButtonClick={onAnswerButtonClick}
          answers={answers}
          answerItemCreate={answerItemCreate}
          disabled={questionInputText === ''}
        />
      </div>
    </div>
  );
};

QuestionBuilder.defaultProps = {
  questionInputText: '',
  answerInputText: '',
  hiddenAddAnswer: true,
  answers: []
};

QuestionBuilder.propTypes = {
  onQuestionChange: PropTypes.func,
  questionInputText: PropTypes.string,
  onAnswerChange: PropTypes.func,
  answerInputText: PropTypes.string,
  onAnswerSubmit: PropTypes.func,
  onAnswerButtonClick: PropTypes.func,
  hiddenAddAnswer: PropTypes.bool,
  answers: PropTypes.array,
  setAnswerArray: PropTypes.func
};

export default QuestionBuilder;
