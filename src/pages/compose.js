import React from 'react';
import { Link } from 'gatsby';

//components
import Layout from '../components/layout';
import Checkbox from '../components/checkbox';

//redux

const ComposePage = () => (
  <Layout>
    Compose
    <div className="pt-5">
      <Link to="/">Home</Link>
    </div>
    <div>
      <Link to="/preview">Preview</Link>
    </div>
    <Checkbox />
  </Layout>
);

export default ComposePage;
