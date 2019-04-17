import React from 'react';
import { Link } from 'gatsby';
import { redirect } from '../utilities/location';

import Layout from '../components/layout';
import Label from '../components/label';
import Button from '../components/button';
import TextEditor from '../components/text-editor/index.js';
import './styles/preview.css';

//images
import Pages from '../images/pages.svg';
import Box from '../images/question-box.svg';
// Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../redux/actions/compose';
const mapStateToProps = ({ compose }) => ({ ...compose });
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

const PreviewLetterPage = ({ letterHTML, answers, questionInputText }) => {
  // Preview page should redirect
  if (letterHTML === '' || letterHTML === '<p><br></p>') redirect('/');

  return (
    <Layout>
      <div className="d-flex justify-content-center">
        <div className="main-container">
          <Label cursive className="d-flex align-self-center">
            <h1>Preview</h1>
          </Label>
          <div className="pages-container">
            <div className="text-preview-field">
              <TextEditor preview letterHTML={letterHTML} />
            </div>
            <Pages className="pages" />
          </div>
          <div hidden={!questionInputText}>
            <div className="question-container">{questionInputText}</div>
            <Box className="box" />
          </div>
          <div className="send-button-container">
            <Link to="/compose" className="text-muted pr-3">
              Edit
            </Link>
            <Button primary text="Send" />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PreviewLetterPage);
