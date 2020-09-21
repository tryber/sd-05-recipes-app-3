import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import RecipeContext from '../context/RecipeContext';
import recipeConstructor from '../components/details/recipeconstructor.js';
import ImageDetail from '../components/details/ImageDetail';
import CardDetail from '../components/details/CardDetail';
import IngredientOngoing from '../components/IngredientOngoing';
import InstructionsDetail from '../components/details/InstructionsDetail';
import { lookUpIdMeal, lookUpIdDrink } from '../service/apis';
import FinishRecipeButton from '../components/details/FinishRecipeButton';
import FavoriteButton from '../components/details/FavoriteButton';
import ShareButton from '../components/details/ShareButton';
import FavoriteContext from '../context/FavoriteContext';
import '../css/details.css';

function OngoingRecipe(props) {
  const { setFetching, ongoing, setOngoing } = useContext(RecipeContext);
  const { strMealThumb, strMeal, strDrinkThumb, strDrink } = ongoing[0];
  const { strInstructions, strCategory, strArea, strAlcoholic } = ongoing[0];
  const { readFromStorage, isFavorite } = useContext(FavoriteContext);
  const { match: { params: { idRecipe } }, type } = props;
  const isItFavorite = readFromStorage() ? readFromStorage()
    .some((itIs) => itIs.id === idRecipe) : false;
  const [favorite, setFavorite] = useState(isItFavorite);
  function handleFavorite(favoriteRecipeId) {
    const favoritedRecipe = { id: favoriteRecipeId,
      type,
      area: strArea,
      category: strCategory,
      alcoholicOrNot: strAlcoholic,
      name: strDrink,
      image: strDrinkThumb,
    };
    isFavorite(favoritedRecipe, favorite);
    setFavorite(!favorite);
  }
  const name = type === 'comidas' ? strMeal : strDrink;
  const thumb = type === 'comidas' ? strMealThumb : strDrinkThumb;
  const { allIngredients, allMeasures } = recipeConstructor(ongoing[0]);
  useEffect(() => {
    setFetching(true);
    if (props.type === 'comida') {
      lookUpIdMeal(idRecipe).then((food) => setOngoing(food.meals))
        .then(localStorage.setItem('InProgressRecipes', JSON.stringify({ cocktails: { [idRecipe]: [] } })))
        .catch((error) => console.log('comida', error));
    } else if (props.type === 'bebida') {
      lookUpIdDrink(idRecipe)
        .then((drink) => setOngoing(drink.drinks))
        .catch((error) => console.log('bebida', error));
    }
    setFetching(false);
  }, []);
  return (<div className="body-details">
    <ImageDetail strOption={name} thumb={thumb} />
    <CardDetail strOption={strMeal || strDrink} trCategory={strCategory} />
    <FavoriteButton id={idRecipe} func={handleFavorite} idx="" favorite={favorite} />
    <ShareButton />
    <IngredientOngoing ingredient={allIngredients} measure={allMeasures} idRecipe={idRecipe} />
    <InstructionsDetail instructions={strInstructions} />
    <FinishRecipeButton literals={'/receitas-feitas'} />
  </div>);
}

export default OngoingRecipe;

OngoingRecipe.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.objectOf(String).isRequired,
  }).isRequired,
  type: PropTypes.string.isRequired,
};

/* <ShareButton url={pathname} literals={'-share-btn'} alt={name} idx='' /> */
