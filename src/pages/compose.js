import React from 'react';
import { Link } from 'gatsby';

//components
import Layout from '../components/layout';
import Sub from '../components/sub';
import Label from '../components/label';
import Button from '../components/button';
import TextEditor from '../components/text-editor/index.js';
import QuestionBuilder from '../components/question-builder/index';
import Input from '../components/input-field';
import Checkbox from '../components/checkbox';
import './styles/compose.css';

//functions
import validEmail from '../utilities/regex';

// Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../redux/actions/compose';
const mapStateToProps = ({ compose }) => ({ ...compose });
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

const ComposePage = ({
  onLetterChange,
  letterHTML,
  userEmail,
  onEmailChange,
  onQuestionChange,
  questionInputText,
  onAnswerChange,
  answerInputText,
  onAnswerSubmit,
  onAnswerButtonClick,
  hiddenAddAnswer,
  answers,
  setAnswerArray,
  onQuestionTick,
  questionBuilderTick
}) => (
  <Layout>
    <div className="email-input-header">
      <Label cursive>Email</Label>
    </div>
    <div className="d-flex justify-content-center">
      <Input
        type="email"
        className="email-input"
        onChange={onEmailChange}
        placeholder="enter your email"
        value={userEmail}
      />
    </div>
    <Sub
      className="d-flex justify-content-center mt-1"
      text={
        validEmail(userEmail) || userEmail === ''
          ? 'where you will recieve the response'
          : 'enter a valid email'
      }
      style={
        validEmail(userEmail) || userEmail === '' ? undefined : { color: 'red' }
      }
    />

    <div className="text-editor-header">
      <Label cursive className="text-center">
        Your letter
      </Label>
    </div>
    <div className="d-flex justify-content-center">
      <TextEditor
        onLetterChange={e => onLetterChange(e)}
        placeholder="enter how you feel"
        letterHTML={letterHTML}
      />
    </div>
    <div className="question-header">
      <Checkbox onClick={onQuestionTick} hidden={questionBuilderTick} />
      <Label cursive>Question</Label>
    </div>
    <div className="d-flex justify-content-center">
      <div hidden={questionBuilderTick}>
        <QuestionBuilder
          onQuestionChange={onQuestionChange}
          questionInputText={questionInputText}
          onAnswerChange={onAnswerChange}
          answerInputText={answerInputText}
          onAnswerButtonClick={onAnswerButtonClick}
          onAnswerSubmit={onAnswerSubmit}
          hiddenAddAnswer={hiddenAddAnswer}
          answers={answers}
          setAnswerArray={setAnswerArray}
        />
      </div>
    </div>
    <div className="button-container">
      <Link to="/preview">
        <Button
          disabled={
            userEmail === '' ||
            letterHTML === '<p><br></p>' ||
            letterHTML === '' ||
            !validEmail(userEmail)
          }
          primary
          text="Preview"
        />
      </Link>
    </div>
  </Layout>
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ComposePage);
