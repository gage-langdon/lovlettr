import React from 'react';
import { Link } from 'gatsby';

//components
import Layout from '../components/layout';
import Label from '../components/label';
import Button from '../components/button';
import TextEditor from '../components/text-editor';

//redux actions
import { onClick } from '../redux/actions/compose';

//redux config
import { connect } from 'react-redux';
const mapStateToProps = state => ({ composeProps: state.composeReducer });
const mapDispatchToProps = dispatch => ({
  onClick: () => dispatch(onClick())
});


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

//connecting view -> this gets exported and redered as the component
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ComposePage);




