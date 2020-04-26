import React from 'react';
import { Link } from 'gatsby';

//components
import Button from '../components/button';
import Layout from '../components/layout';
import Label from '../components/label';

// Images
import CoupleIllustration1 from '../images/couple-illustration-1.svg';
import SendAndReceiveIllustration from '../images/recieve-and-send-illustration.svg';

const IndexPage = () => (
  <Layout>
    <div className="py-5 text-center">
      <Label cursive>
        <h2 className="h1">Uniquely Personalized, Interactive Love Letters</h2>
      </Label>
    </div>
    <div className="d-flex flex-column align-items-center">
      <CoupleIllustration1 />
      <Link
        to="/compose"
        className="mt-3"
        style={{ paddingLeft: '150px', bottom: '4' }}
      >
        <Button primary text="Try it out" />
      </Link>
    </div>
    <div className="d-flex flex-column align-items-center pt-5 mt-5">
      <SendAndReceiveIllustration />
      <Label cursive className="pt-4">
        <h3>Receive and send a response</h3>
      </Label>
    </div>
    <div className="mt-5 mb-4">
      <div className="d-flex flex-column align-items-center pt-5">
        <Label cursive>
          <h4>Be Mine?</h4>
        </Label>
        <Link to="/compose" className="mt-3">
          <Button primary text="Try it out" />
        </Link>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
