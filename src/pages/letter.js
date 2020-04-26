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
    setLtr({ ...ltr, questionResponse });
    if (status === 200) {
      alert('Letter response sent!');
    }
  }

  if (showLtr) {
    const { questionInputText, answers, letterHTML, questionResponse } = ltr;
    return (
      <Layout>
        <div className="d-flex align-items-center flex-column">
          <div
            className="text-preview-field"
            dangerouslySetInnerHTML={{ __html: letterHTML }}
          />
          {/* <Pages className="pages" /> */}

          <div hidden={questionResponse}>
            <p className="question-container-letter">{questionInputText}</p>
            <div className="answer-container-letter">
              {answers.map(item => (
                <Button
                  className="button-secondary"
                  onClick={() => sendResponse({ questionResponse: item.text })}
                  key={item.id}
                  text={item.text}
                />
              ))}
            </div>
            <Box hidden={answers.length === 0} className="box-letter" />
            <div hidden={answers.length === 0}>
              <Sub
                className="d-flex justify-content-center mt-1 mb-3"
                text="click an answer and the sender is notified"
              />
            </div>
          </div>
          <Link className="mt-2 mb-2" to="/compose">
            <Button primary text="Send one back" />
          </Link>
        </div>
      </Layout>
    );
  } else {
    return (
      <Layout>
        <div className="d-flex align-items-center flex-column">
          <Couple className="mt-2" />
          <div hidden={ltr} className="loader">
            <PulseLoader color={'#ff6584'} />
          </div>
          {ltr ? (
            <div className="d-flex align-items-center flex-column">
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
                letter, the question has corresponding answers. Press any of the
                answers to send a response back to the sender.
              </label>
              <Button
                primary
                text="Next"
                onClick={() => revealLetter(!showLtr)}
              />
              <Sub className="mt-2" text="'Next' to view the letter" />
            </div>
          ) : null}
        </div>
      </Layout>
    );
  }
};

export default LettrPage;
