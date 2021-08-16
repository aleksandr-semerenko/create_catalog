import React from 'react';
import PropTypes from 'proptypes';
import './SideBar.scss';

export const SideBar = ({ goods, onClick }) => (
  <div className="Sidebar">
    <h1>Information about catalog</h1>
    <div className="menu">
      <p className="menu-label">
        {`Total number of goods: ${goods.length}`}
      </p>
      <p className="menu-label">
        {`Total price: ${goods.length
          ? goods.map(good => good.price)
            .reduce((a, b) => a + b)
          : 0} $`}
      </p>
      <p className="menu-label">
        {`Average price: ${goods.length
          ? (goods.map(good => good.price)
            .reduce((a, b) => a + b) / goods.length).toFixed(2)
          : 0} $`}
      </p>
      <button
        type="button"
        className="button is-danger"
        onClick={onClick}
      >
        Clear catalog
      </button>
    </div>
  </div>
);

SideBar.propTypes = {
  onClick: PropTypes.func.isRequired,
  goods: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};
