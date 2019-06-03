import React from 'react';
import { Link } from 'gatsby';
import { getLtr } from '../utilities/https';

import Layout from '../components/layout';

const LettrPage = () => (
  <Layout>
    Hello!
    <div>This is the letter page</div>
    <div className="pt-5">
      <Link to="/preview">Back</Link>
    </div>
    <button onClick={() => getLtr(1)}>hit</button>
    <div className="pt-5">
      <Link to="/preview">Home</Link>
    </div>
  </Layout>
);

export default LettrPage;