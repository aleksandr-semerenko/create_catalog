import React from 'react';
import PropTypes from 'proptypes';
import './Header.scss';

export const Header = ({ logo }) => (
  <header className="Header">
    <img
    // eslint-disable-next-line
      src={logo}
      alt="logo"
      className="Header__logo"
    />
    <div className="Header__menu">
      <button
        type="button"
        className="button is-primary"
      >
        Catalog
      </button>
      <button
        type="button"
        className="button is-primary"
      >
        Add good
      </button>
    </div>
  </header>
);

Header.propTypes = {
  logo: PropTypes.string.isRequired,
};
