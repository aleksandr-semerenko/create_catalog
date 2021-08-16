import React from 'react';
import PropTypes from 'proptypes';
import { CardOfGood } from '../CardOfGood';
import './ListOfGoods.scss';

export const ListOfGoods = ({ goods }) => (
  <div className="goods">
    {goods.map(good => (
      <CardOfGood key={good.id} {...good} />
    ))}
  </div>
);

ListOfGoods.propTypes = {
  goods: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};
