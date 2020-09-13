import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { lookUpIdMeal } from '../service/apis';
import RecipeContext from '../context/RecipeContext';
// import '../css/';

function FoodDetails(props) {
  const { idRecipe } = props.match.params;
  const { fetching, setFetching, setDetails, details } = useContext(RecipeContext);
  const { strMealThumb, strMeal } = details[0];
  console.log(details[0]);
  useEffect(() => {
    setFetching(true);
    lookUpIdMeal(idRecipe).then((food) => setDetails(food.meals))
    // (food.meals) ?
    // setDetails(food.meals) : alert('Erro no servidor! tente novamente.'))
    .catch((error) => alert('Algo inesperado aconteceu:', error));
    setFetching(false);
  }, []);

  return fetching ? (
    <div>Loading...</div>
  ) : (
    <div>
      FoodDetails Page
      <div className="card-recipe">
        <img alt={strMeal} className="card-recipe-image" src={strMealThumb} />
        <div className="card-recipe-body">
          <h3 className="card-recipe-name">{strMeal}</h3>
        </div>
      </div>
    </div>
  );
}

export default FoodDetails;

FoodDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.objectOf(String).isRequired,
  }).isRequired,
};
