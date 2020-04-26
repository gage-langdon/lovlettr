import React from 'react';

//utils
import { postLtr } from '../utilities/https';
import { redirect } from '../utilities/location';

//components
import Layout from '../components/layout';
import Button from '../components/button';
import { Link } from 'gatsby';
import Label from '../components/label';
import Modal from './preview/components/modal';

//images
import Pages from '../images/pages.svg';

//styles
import './styles/preview.css';

// Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../redux/actions/compose';

/* eslint-disable */

const mapStateToProps = ({ compose }) => ({ ...compose });
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

const PreviewLetterPage = ({
  letterHTML,
  userEmail,
  questionInputText,
  answers,
  setLtr,
  ltr,
  questionBuilderTick,
  show,
  setShow
}) => {
  if (letterHTML === '' || letterHTML === '<p><br></p>') redirect('/');
  return (
    <Layout>
      <Modal letterId={ltr.letterId} show={show} setShow={setShow} />
      <div className="d-flex align-items-center flex-column">
        <Label cursive className="d-flex align-self-center">
          <h1>Preview</h1>
        </Label>
        <div dangerouslySetInnerHTML={{ __html: letterHTML }} />
        {(questionBuilderTick && (
          <div className="d-flex align-items-center flex-column">
            <p className="question-container">{questionInputText}</p>
            <div className="answer-container">
              {answers.map(item => (
                <Button
                  className="button-secondary"
                  key={item.id}
                  text={item.text}
                />
              ))}
            </div>
            <div>
              <sub className="d-flex justify-content-center mt-2 mb-3">
                click an answer and the sender is notified
              </sub>
            </div>
          </div>
        )) ||
          null}
        <Pages className="pages" />
      </div>
      <div className="send-button-container mb-4">
        <Link to="/compose" className="text-muted pr-3">
          Edit
        </Link>
        <Button
          primary
          text="Send"
          onClick={async () =>
            ltr
              ? setShow(!show)
              : (setLtr(
                  await postLtr({
                    userEmail,
                    letterHTML,
                    questionInputText,
                    answers
                  })
                ),
                setShow(!show))
          }
        />
      </div>
    </Layout>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PreviewLetterPage);
