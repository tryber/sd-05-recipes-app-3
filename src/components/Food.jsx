import React from 'react';
import { Link } from 'react-router-dom';
import '../components/card_recipe.css';

class Food extends React.Component {
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
