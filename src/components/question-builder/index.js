import React from 'react';
import PropTypes from 'prop-types';

//components
import InputField from '../input-field';
import AddAnswer from './components/add-answer';
import './styles.css';

//images
import Delete from '../../images/delete.svg';

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
    <div className="d-flex flex-column">
      <form
        onSubmit={e => {
          e.preventDefault();
          if (questionInputText !== '') onAnswerButtonClick();
        }}
      >
        <InputField
          className="input-question-field"
          placeholder={'Will you go on a date with me?'}
          onChange={onQuestionChange}
          value={questionInputText}
        />
      </form>
      <sub className="question-sub-text" hidden={questionInputText !== ''}>
        enter a question and then add some answers
      </sub>
      <div className="d-flex flex-column">
        {answers.length === 0
          ? null
          : answers.map(item => (
              <div className="answer-item-container" key={item.id}>
                <label className="answer-item">{item.text}</label>
                <Delete
                  className="answer-item-x"
                  onClick={() => answerItemDelete(item.id)}
                />
              </div>
            ))}
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
          questionInputText={questionInputText}
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
