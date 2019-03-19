import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Label from '../components/label';
import Button from '../components/button';
import TextEditor from '../components/text-editor';

const ComposePage = () => (
  <Layout>
    <Label cursive className="text-muted">
      Your Letter
    </Label>
    <TextEditor onChange={value => console.log(value)} />

    <div className="pt-5 d-flex justify-content-end">
      <Link to="/preview">
        <Button disabled primary text="Preview" />
      </Link>
    </div>
  </Layout>
);

export default ComposePage;
