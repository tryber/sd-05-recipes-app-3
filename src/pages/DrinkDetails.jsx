import PropTypes from 'prop-types';
import React, { useEffect, useContext } from 'react';
import { lookUpIdDrink } from '../service/apis';
import RecipeContext from '../context/RecipeContext';

function DrinkDetails(props) {
  const { idRecipe } = props.match.params;
  const { fetching, setFetching, setDetails, details } = useContext(RecipeContext);
  const { strDrinkThumb, strDrink } = details[0];
  console.log(details[0]);
  useEffect(() => {
    setFetching(true);
    lookUpIdDrink(idRecipe).then((drink) => setDetails(drink.drinks));
    setFetching(false);
  }, []);

  return fetching ? (
    <div>Loading...</div>
  ) : (
    <div>
      DrinkDetails Page
      <div className="card-recipe">
        <img alt={strDrink} className="card-recipe-image" src={strDrinkThumb} />
        <div className="card-recipe-body">
          <p className="card-recipe-name">{strDrink}</p>
        </div>
      </div>
    </div>
  );
}

export default DrinkDetails;

DrinkDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.objectOf(String).isRequired,
  }).isRequired,
};
