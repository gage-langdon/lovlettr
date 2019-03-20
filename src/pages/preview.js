import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Label from '../components/label/index';
import Button from '../components/button/index';
import QuestionBuilder from '../components/question-builder/index';

// Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../redux/actions/compose';
const mapStateToProps = ({ compose }) => ({ ...compose });
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

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
    <div>
      <Label cursive>Question</Label>
      <QuestionBuilder />
    </div>
  </Layout>
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PreviewLetterPage);
