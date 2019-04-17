import React from 'react';
import { Link } from 'gatsby';

//components
import Layout from '../components/layout';
import Label from '../components/label';
import Button from '../components/button';
import TextEditor from '../components/text-editor/index.js';
import QuestionBuilder from '../components/question-builder/index';
import Checkbox from '../components/checkbox';
import './styles/compose.css';

// Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../redux/actions/compose';
const mapStateToProps = ({ compose }) => ({ ...compose });
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

const ComposePage = ({
  onLetterChange,
  letterHTML,
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
  questionBuilderTick,
  onTextEditorTick,
  textEditorTick
}) => (
  <Layout>
    <div className="text-editor-header">
      <Checkbox onClick={onTextEditorTick} hidden={textEditorTick} />
      <Label cursive className="text-center">
        Your letter
      </Label>
    </div>
    <div hidden={textEditorTick}>
      <div className="d-flex justify-content-center">
        <TextEditor
          onLetterChange={e => onLetterChange(e)}
          placeholder="enter how you feel"
          letterHTML={letterHTML}
        />
      </div>
    </div>
    <div className="question-header">
      <Checkbox onClick={onQuestionTick} hidden={questionBuilderTick} />
      <Label cursive>Question</Label>
    </div>
    <div className="d-flex justify-content-center">
      <div className="d-flex flex-column align-content-center">
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
        <div className="preview-button-container">
          <Link to="/preview">
            <Button disabled={letterHTML === ''} primary text="Preview" />
          </Link>
        </div>
      </div>
    </div>
  </Layout>
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ComposePage);
