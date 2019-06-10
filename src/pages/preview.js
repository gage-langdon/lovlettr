import React from 'react';

//utils
import { postLtr } from '../utilities/https';
import { redirect } from '../utilities/location';

//components
import Layout from '../components/layout';
import Button from '../components/button';
import { Link } from 'gatsby';
import Label from '../components/label';

//images
import Pages from '../images/pages.svg';
import Box from '../images/question-box.svg';

//styles
import './styles/preview.css';

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
      <div className="d-flex align-items-center flex-column">
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
          <p className="question-container">{questionInputText}</p>
          <div className="answer-container">
            {answers.map(item => (
              <Button
                className="button-square"
                key={item.id}
                text={item.text}
              />
            ))}
          </div>
          <Box hidden={answers.length === 0} className="box" />
          <div hidden={answers.length === 0}>
            <sub className="d-flex justify-content-center mt-1 mb-3">
              click an answer and the sender is notified
            </sub>
          </div>
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
    </Layout>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PreviewLetterPage);
