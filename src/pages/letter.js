import React, { useState, useEffect } from 'react';

//utils
import { getLtr, editLtr } from '../utilities/https';
import { redirect } from '../utilities/location';

//components
import Button from '../components/button';
import Layout from '../components/layout';
import Sub from '../components/sub';
import { PulseLoader } from 'react-spinners';
import { Link } from 'gatsby';

//images
import Pages from '../images/pages.svg';
import Box from '../images/question-box.svg';
import Couple from '../images/couple-illustration-1.svg';

//styles
import './styles/letter.css';

const LettrPage = props => {
  const [ltr, setLtr] = useState();
  const [showLtr, revealLetter] = useState(false);

  const ltrId = props.location.pathname.replace('/letter/', '');

  useEffect(() => {
    awaitLtr(ltrId);
  });

  async function awaitLtr(ltrId) {
    if (!ltr) {
      try {
        const { data } = await getLtr(ltrId);
        setLtr(data);
      } catch (e) {
        redirect('/404');
      }
    }
  }

  async function sendResponse({ questionResponse }) {
    const { status } = await editLtr({ ...ltr, questionResponse });
    if (status === 200) {
      alert('Letter response sent!');
      redirect('/');
    }
  }

  if (showLtr) {
    const { questionInputText, answers, letterHTML } = ltr;
    return (
      <Layout>
        <div className="d-flex flex-column">
          <div className="d-flex justify-content-center">
            <div className="pages-container">
              <div
                className="text-preview-field"
                dangerouslySetInnerHTML={{ __html: letterHTML }}
              />
              <Pages className="pages" />
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <div className="d-flex justify-content-center">
              <div className="question-container-letter">
                {questionInputText}
              </div>
              <div className="answer-container-letter">
                {answers.map(item => (
                  <Button
                    className="button-square"
                    onClick={() =>
                      sendResponse({ questionResponse: item.text })
                    }
                    key={item.id}
                    text={item.text}
                  />
                ))}
              </div>
              <Box hidden={answers.length === 0} className="box-letter" />
            </div>
          </div>
          <div hidden={answers.length === 0}>
            <Sub
              className="d-flex justify-content-center mt-1 mb-3"
              text="click an answer and the sender is notified"
            />
          </div>
          <div className="d-flex justify-content-center mt-2 mb-2">
            <Link to="/compose">
              <Button primary text="Send one back" />
            </Link>
          </div>
        </div>
      </Layout>
    );
  } else {
    return (
      <Layout>
        <div className="d-flex justify-content-center">
          <div className="d-flex flex-column">
            <Couple className="mt-2 ml-2" />
            <div hidden={ltr} className="loader">
              <PulseLoader color={'#ff6584'} />
            </div>
            {ltr ? (
              <div className="d-flex flex-column justify-content-center mt-5">
                <label
                  className="letter-explanation-small"
                  hidden={ltr.answers.length !== 0}
                >
                  You were sent a love letter! Maybe send one back.
                </label>
                <label
                  className="letter-explanation-large"
                  hidden={ltr.answers.length === 0}
                >
                  You were sent a love letter! There is a question below the
                  letter, the question has corresponding answers. Press any of
                  the answers to send a response back to the sender.
                </label>
                <div className="d-flex align-items-center justify-content-center flex-column">
                  <Button
                    primary
                    text="Next"
                    onClick={() => revealLetter(!showLtr)}
                  />
                  <Sub className="mt-2" text="'Next' to view the letter" />
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </Layout>
    );
  }
};

export default LettrPage;
