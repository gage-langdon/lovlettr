import React, { useState, useEffect } from 'react';

//utils
import { getLtr, editLtr } from '../utilities/https';
import { redirect } from '../utilities/location';

//components
import Button from '../components/button';
import Layout from '../components/layout';

//images
import Pages from '../images/pages.svg';
import Box from '../images/question-box.svg';
import Couple from '../images/couple-illustration-1.svg';

const LettrPage = props => {
  const [ltr, setLtr] = useState();
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

  if (ltr) {
    const { questionInputText, answers, letterHTML } = ltr;
    return (
      <Layout>
        <div className="pages-container">
          <div
            className="text-preview-field"
            dangerouslySetInnerHTML={{ __html: letterHTML }}
          />
          <Pages className="pages" />
        </div>
        <div>
          <div className="question-container">{questionInputText}</div>
          <div className="answer-container">
            {answers.map(item => (
              <Button
                className="button-square"
                onClick={() => sendResponse({ questionResponse: item.text })}
                key={item.id}
                text={item.text}
              />
            ))}
          </div>
          <Box className="box" />
        </div>
      </Layout>
    );
  } else {
    return (
      <Layout>
        <div className="d-flex justify-content-center">
          <Couple />
        </div>
      </Layout>
    );
  }
};

export default LettrPage;
