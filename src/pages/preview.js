import React from 'react';
import { Link } from 'gatsby';
<<<<<<< HEAD

import Layout from '../components/layout';
import Label from '../components/label/index';
import Button from '../components/button/index';
=======
import { redirect } from '../utilities/location';

import Layout from '../components/layout';
import Label from '../components/label';
import Button from '../components/button';
>>>>>>> 715a2a6cfe1cc70083ee9f5797cc4c75d27cc9eb

// Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../redux/actions/compose';
const mapStateToProps = ({ compose }) => ({ ...compose });
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);
<<<<<<< HEAD

const PreviewLetterPage = ({ letterHTML }) => (
  <Layout>
    <Label cursive className="text-center">
      <h1>Preview</h1>
    </Label>
    <hr />
    <div
      className="py-5 px-3"
      dangerouslySetInnerHTML={{ __html: letterHTML }}
    />
    <hr />
    <div className="d-flex flex-row justify-content-end align-items-center">
      <Link to="/compose" className="text-muted pr-3">
        Edit
      </Link>
      <Button primary text="Send" />
    </div>
  </Layout>
);

=======

const PreviewLetterPage = ({ letterHTML }) => {
  // Preview page should redirect
  if (!letterHTML) redirect('/');

  return (
    <Layout>
      <Label cursive className="text-center">
        <h1>Preview</h1>
      </Label>
      <hr />
      <div
        className="py-5 px-3"
        dangerouslySetInnerHTML={{ __html: letterHTML }}
      />
      <hr />
      <div className="d-flex flex-row justify-content-end align-items-center">
        <Link to="/compose" className="text-muted pr-3">
          Edit
        </Link>
        <Button primary text="Send" />
      </div>
    </Layout>
  );
};

>>>>>>> 715a2a6cfe1cc70083ee9f5797cc4c75d27cc9eb
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PreviewLetterPage);
