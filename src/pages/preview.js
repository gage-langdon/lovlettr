import React from 'react';
import { Link } from 'gatsby';
import { redirect } from '../utilities/location';

//utils
import { postLtr } from '../utilities/https';

import Layout from '../components/layout';
import Label from '../components/label';
import Button from '../components/button';
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

const PreviewLetterPage = ({
  letterHTML,
  userEmail,
  questionInputText,
  answers,
  setLtr,
  ltr,
  questionBuilderTick
}) => {
  // Preview page should redirect
  if (letterHTML === '' || letterHTML === '<p><br></p>') redirect('/');
  if (ltr !== '') redirect('/letter');

  return (
    <Layout>
      <div className="d-flex justify-content-center">
        <div className="main-container">
          <Label cursive className="d-flex align-self-center">
            <h1>Preview</h1>
          </Label>
          <div className="pages-container">
            <div
              className="text-preview-field"
              dangerouslySetInnerHTML={{ __html: letterHTML }}
            />
            <Pages className="pages" />
          </div>
          <div hidden={questionBuilderTick}>
            <div className="question-container">{questionInputText}</div>
            <div className="answer-container">
              {answers.map(item => (
                <Button
                  className="button-square"
                  key={item.id}
                  text={item.text}
                />
              ))}
            </div>
            <Box className="box" />
          </div>
          <div className="send-button-container">
            <Link to="/compose" className="text-muted pr-3">
              Edit
            </Link>
            <Button
              primary
              text="Send"
              onClick={async () =>
                setLtr(
                  await postLtr({
                    userEmail,
                    letterHTML,
                    questionInputText,
                    answers
                  })
                )
              }
            />
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
