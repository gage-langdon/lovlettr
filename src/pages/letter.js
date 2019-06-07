import React, { useState, useEffect } from 'react';

//utils
import { getLtr, editLtr } from '../utilities/https';

//components
import Button from '../components/button';
import { Link } from 'gatsby';
import Layout from '../components/layout';

//images
import Pages from '../images/pages.svg';
import Box from '../images/question-box.svg';
import { redirect } from '../utilities/location';

const LettrPage = () => {
  const [ltr, setLtr] = useState();

  async function awaitLtr(ltrId) {
    if (!ltr) {
      const ltr = await getLtr(ltrId);
      setLtr(ltr.data);
    }
  }

  async function sendResponse({ questionResponse }) {
    const { status } = await editLtr({ ...ltr, questionResponse });
    if (status === 200) {
      alert('Letter response sent!');
      redirect('/');
    }
  }

  useEffect(() => {
    awaitLtr('37c1abb0-8819-11e9-b48e-d55d1f5ca6cf');
  });

  console.log(ltr);
  const { questionInputText, answers, letterHTML, letterId } = ltr;

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
};

export default LettrPage;
