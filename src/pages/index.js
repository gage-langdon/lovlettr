import React from 'react';
import { Link } from 'gatsby';
//components
import Button from '../components/button';
import Layout from '../components/layout';
import Label from '../components/label';
import Checkbox from '../components/checkbox';

//assets
import CoupleIllustration1 from '../components/images/couple-illustration-1';

const IndexPage = () => (
  <Layout>
    <div className="py-5 text-center">
      <Label cursive>
        <h2 className="h1">Uniquely Personalized, Interactive Love Letters</h2>
      </Label>
    </div>
    <div>
      <CoupleIllustration1 />
    </div>

    <div className="pt-5">
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
