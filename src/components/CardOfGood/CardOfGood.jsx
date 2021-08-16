import React from 'react';
import PropTypes from 'proptypes';
import './CardOfGood.scss';

export const CardOfGood = ({ name, img, price, description }) => (
  <div className="card">
    <div className="card-image">
      <figure className="image is-4by3">
        <img
          src={img}
          alt={name}
        />
      </figure>
    </div>
    <div className="card-content">
      <div className="media">
        <div className="media-content">
          <p className="title is-8">{name}</p>
        </div>
      </div>
      <div className="content">
        {description}
      </div>
      <div className="card-footer">
        <div className="card-footer-item">
          {`Price: ${price}`}
        </div>
      </div>
    </div>
  </div>
);

CardOfGood.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
};
