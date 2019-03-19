import React from 'react';
import { Link } from 'gatsby';

//components
import Layout from '../components/layout';
import Checkbox from '../components/checkbox';

//redux actions
import { onClick } from '../redux/actions/compose';

//redux config
import { connect } from 'react-redux';
const mapStateToProps = state => ({ composeProps: state.composeReducer });
const mapDispatchToProps = dispatch => ({
  onClick: () => dispatch(onClick())
});

//view
function ComposePage(props) {
  return (
    <Layout>
      Compose
      <div className="pt-5">
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/preview">Preview</Link>
      </div>
    </Layout>
  );
}

//connecting view -> this gets exported and redered as the component
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ComposePage);
