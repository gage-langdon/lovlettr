import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

// Components
import Logo from '../../images/nav-logo.svg';

const Navbar = () => (
  <header
    style={{
      background: `#FF6584`,
      marginBottom: `1.45rem`
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        padding: `0.2rem 1.0875rem`
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link to="/">
          <Logo />
        </Link>
      </h1>
    </div>
  </header>
);

Navbar.propTypes = {
  siteTitle: PropTypes.string
};

Navbar.defaultProps = {
  siteTitle: ``
};

export default Navbar;
