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

<<<<<<< HEAD
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
=======
const placeholderLetter =
  '<p>Hello <strong>Beautiful</strong>,</p><p><br></p><p>I hope your day is going well!</p><p> </p><p><br></p>';

const ComposePage = ({ onLetterChange, letterHTML }) => (
>>>>>>> 715a2a6cfe1cc70083ee9f5797cc4c75d27cc9eb
  <Layout>
    <Label cursive className="text-center">
      <h1>Write a letter</h1>
    </Label>
    <hr />
    <div className="py-5 px-3">
<<<<<<< HEAD
      <TextEditor onChange={onLetterChange} value={letterHTML} />
=======
      <TextEditor
        onChange={onLetterChange}
        value={letterHTML}
        placeholder={placeholderLetter}
      />
>>>>>>> 715a2a6cfe1cc70083ee9f5797cc4c75d27cc9eb
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
