import React from 'react';
import { Link } from 'gatsby';

//components
import Layout from '../components/layout';
import Label from '../components/label';
import Button from '../components/button';
import TextEditor from '../components/text-editor';

// Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../redux/actions/compose';
const mapStateToProps = ({ compose }) => ({ ...compose });
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

const placeholderLetter =
  '<p>Hello <strong>Beautiful</strong>,</p><p><br></p><p>I hope your day is going well!</p><p> </p><p><br></p>';

const ComposePage = ({ onLetterChange, letterHTML }) => (
  <Layout>
    <Label cursive className="text-center">
      <h1>Write a letter</h1>
    </Label>
    <hr />
    <div className="py-5 px-3">
      <TextEditor
        onChange={onLetterChange}
        value={letterHTML}
        placeholder={placeholderLetter}
      />
    </div>
    <div className="d-flex pt-4">
      <small className="text-muted mx-auto">
        Select text to view formatting
      </small>
    </div>
    <hr />
    <div className="d-flex justify-content-end">
      <Link to="/preview">
        <Button disabled={!letterHTML} primary text="Preview" />
      </Link>
    </div>
  </Layout>
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ComposePage);
