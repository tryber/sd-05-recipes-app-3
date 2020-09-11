import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Proptypes from 'prop-types';

import '../components/card_recipe.css';

class Food extends Component {
  render() {
    const { strMealThumb, strMeal, idMeal } = this.props.food;
    return (
      <div className="card-recipe">
        <Link to={`/comidas/${idMeal}`}>
          <img alt={strMeal} className="card-recipe-image" src={strMealThumb} />
          <div className="card-recipe-body">
            <h3 className="card-recipe-name">{strMeal}</h3>
          </div>
        </Link>
      </div>
    );
  }
}

export default Food;

Food.propTypes = {
  food: Proptypes.objectOf(Object).isRequired,
  strMealThumb: Proptypes.string.isRequired,
  strMeal: Proptypes.string.isRequired,
  idMeal: Proptypes.string.isRequired,
};
