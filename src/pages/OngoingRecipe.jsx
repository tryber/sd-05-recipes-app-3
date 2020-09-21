import React, { useContext, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import RecipeContext from '../context/RecipeContext';
import '../css/details.css';
import recipeConstructor from '../components/details/recipeconstructor.js';
import ImageDetail from '../components/details/ImageDetail';
import CardDetail from '../components/details/CardDetail';
import IngredientOngoing from '../components/IngredientOngoing';
import InstructionsDetail from '../components/details/InstructionsDetail';
import { lookUpIdMeal, lookUpIdDrink } from '../service/apis';
import FinishRecipeButton from '../components/details/FinishRecipeButton';
import FavoriteButton from '../components/details/FavoriteButton';
import ShareButton from '../components/details/ShareButton';

function OngoingRecipe(props) {
  const { idRecipe } = props.match.params;
  const { setFetching, ongoing, setOngoing } = useContext(RecipeContext);
  const {
    strMealThumb,
    strMeal,
    strDrinkThumb,
    strDrink,
    strInstructions,
    strCategory,
  } = ongoing[0];
  //
  const { allIngredients, allMeasures } = recipeConstructor(ongoing[0]);
  // uma saida no console pra vc saber o que esta manipulado
  // console.log(allIngredients, allMeasures);
  useEffect(() => {
    setFetching(true);
    if (props.type === 'comida') {
      lookUpIdMeal(idRecipe)
        .then((food) => setOngoing(food.meals))
        .then(
          localStorage.setItem(
            'InProgressRecipes',
            JSON.stringify({ cocktails: { [idRecipe]: [] } }),
          ),
        )
        .catch((error) => console.log('comida', error));
    } else if (props.type === 'bebida') {
      lookUpIdDrink(idRecipe)
        .then((drink) => setOngoing(drink.drinks))
        .catch((error) => console.log('bebida', error));
    }
    setFetching(false);
  }, []);
//
  return (
    <div className="body-details">
      <ImageDetail strOption={strMeal || strDrink} thumb={strMealThumb || strDrinkThumb} />
      <CardDetail
        strOption={strMeal || strDrink}
        trCategory={strCategory}
      />
      <FavoriteButton />
      <ShareButton />
      <IngredientOngoing ingredient={allIngredients} measure={allMeasures} idRecipe={idRecipe} />
      <InstructionsDetail instructions={strInstructions} />
      <FinishRecipeButton literals={'/receitas-feitas'} />
    </div>
  );
}

OngoingRecipe.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.objectOf(String).isRequired,
  }).isRequired,
  type: PropTypes.string.isRequired,
};

export default OngoingRecipe;
