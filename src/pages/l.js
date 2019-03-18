import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';

const LettrPage = () => (
  <Layout>
    Hello!
    <div>This is the letter page</div>
    <div className="pt-5">
      <Link to="/preview">Back</Link>
    </div>
    <div className="pt-5">
      <Link to="/preview">Home</Link>
    </div>
  </Layout>
);

export default LettrPage;
