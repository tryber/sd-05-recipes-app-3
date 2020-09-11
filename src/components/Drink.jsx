import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Proptypes from 'prop-types';

import '../components/card_recipe.css';

class Drink extends Component {
  render() {
    const { strDrinkThumb, strDrink, idDrink } = this.props.drink;
    return (
      <div className="card-recipe">
        <Link to={`/bebidas/${idDrink}`}>
          <img alt={strDrink} className="card-recipe-image" src={strDrinkThumb} />
          <div className="card-recipe-body">
            <h3 className="card-recipe-name">{strDrink}</h3>
          </div>
        </Link>
      </div>
    );
  }
}

export default Drink;

Drink.propTypes = {
  drink: Proptypes.objectOf(Object).isRequired,
  strDrinkThumb: Proptypes.string.isRequired,
  strDrink: Proptypes.string.isRequired,
  idDrink: Proptypes.string.isRequired,
};
