import React from 'react';
import { Link } from 'gatsby';
import { connect } from 'react-redux';

//components
import Layout from '../components/layout';
import Label from '../components/label';
import Button from '../components/button';
import TextEditor from '../components/text-editor';

// Redux
import { bindActionCreators } from 'redux';
import actions from '../redux/actions/compose';
const mapStateToProps = ({ compose }) => ({ ...compose });
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

const ComposePage = ({ onLetterChange, letterHTML }) => (
  <Layout>
    <Label cursive className="text-muted">
      Your Letter
    </Label>
    <TextEditor onChange={onLetterChange} value={letterHTML} />
    <div className="pt-5 d-flex justify-content-end">
      <Link to="/preview">
        <Button disabled primary text="Preview" />
      </Link>
    </div>
  </Layout>
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ComposePage);
