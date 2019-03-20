import React from 'react';
import { Link } from 'gatsby';

//components
import Layout from '../components/layout';
import Label from '../components/label';
import Button from '../components/button';
import TextEditor from '../components/text-editor';
import QuestionBuilder from '../components/question-builder/index';

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
  addAnswer,
  answers
}) => (
  <Layout>
    <Label cursive className="text-center">
      <h1>Write a letter</h1>
    </Label>
    <hr />
    <div className="py-5 px-3">
      <TextEditor onChange={onLetterChange} value={letterHTML} />
    </div>
    <div className="d-flex pt-4">
      <small className="text-muted mx-auto">
        Select text to view formatting
      </small>
    </div>
    <hr />
    <div className="d-flex justify-content-end">
      <Link to="/preview">
        <Button disabled={!letterHTML} primary text="Preview" />
      </Link>
    </div>
    <div>
      <QuestionBuilder
        onQuestionChange={onQuestionChange}
        questionInputText={questionInputText}
        onAnswerChange={onAnswerChange}
        answerInputText={answerInputText}
        addAnswer={addAnswer}
        answers={answers}
      />
    </div>
  </Layout>
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ComposePage);
