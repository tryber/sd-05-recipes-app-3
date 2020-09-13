import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Proptypes from 'prop-types';
import '../css/recipe-cards-list.css';

class Food extends Component {
  render() {
    const { strMealThumb, strMeal, idMeal, idx } = this.props.food;
    return (
      <div className="card-recipe" data-testid={`${idx}-recipe-card`} >
        <Link to={`/comidas/${idMeal}`}>
          <img
            alt={strMeal}
            className="card-recipe-image"
            src={strMealThumb}
            data-testid={`${idx}-card-img`}
          />
          <div className="card-recipe-body">
            <h3 className="card-recipe-name" data-testid={`${idx}-card-name`}>
              {strMeal}
            </h3>
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
