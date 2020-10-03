// OngoingRecipe
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

function State(setFetching, setOngoing, favorite, url, idRecipe) {
  const recipe = JSON.parse(localStorage.getItem('InProgressRecipes'));
  //
  useEffect(() => {
    console.log(url);
    setFetching(true);
    if (url.includes('comidas')) {
      lookUpIdMeal(idRecipe)
        .then((food) => {
          console.log(food.meals);
          if (food.meals) setOngoing(food.meals[0]);
        })

        .catch((error) => alert('Erro no Servidor', error));
      //
    } else if (url.includes('bebidas')) {
      lookUpIdDrink(idRecipe)
        .then((drink) => {
          console.log(drink.drinks);
          if (drink.drinks) setOngoing(drink.drinks[0]);
        })

        .catch((error) => alert('Erro no Servidor', error));
    }
    setFetching(false);
  }, [favorite]);
}

function OngoingRecipe(props) {
  const { setFetching, ongoing, setOngoing } = useContext(RecipeContext);
  const { strMealThumb = '', strMeal = '', strDrinkThumb = '', strDrink = '' } = ongoing;
  const { strInstructions, strCategory, strArea = '', strAlcoholic = '' } = ongoing;
  const { readFromStorage, isFavorite } = useContext(FavoriteContext);
  const {
    match: {
      params: { idRecipe },
      url,
    },
    type,
  } = props;
  console.log(url);
  const isItFavorite = readFromStorage('favoriteRecipes')
    ? readFromStorage('favoriteRecipes').some((itIs) => itIs.id === idRecipe)
    : false;
  //
  const [favorite, setFavorite] = useState(isItFavorite);
  const name = strMeal || strDrink;
  const image = strMealThumb || strDrinkThumb;
  //
  const favoritedRecipe = {
    id: 'id',
    type,
    area: strArea,
    category: strCategory,
    alcoholicOrNot: strAlcoholic,
    name,
    image,
  };
  function handleFavorite(favoriteRecipeId) {
    favoritedRecipe.id = favoriteRecipeId;
    isFavorite(favoritedRecipe, !favorite);
    setFavorite(!favorite);
  }
  //
  const { allIngredients, allMeasures } = recipeConstructor(ongoing);
  console.log(allIngredients, allMeasures);
  State(setFetching, setOngoing, favorite, url, idRecipe);
  return (
    <div className="body-details">
      <ImageDetail strOption={strMeal || strDrink} thumb={strMealThumb || strDrinkThumb} />
      <FavoriteButton
        literals={'favorite-btn'}
        id={idRecipe}
        func={handleFavorite}
        favorite={favorite}
      />
      <ShareButton literals={'share-btn'} alt={name} url={url} id={idRecipe} />
      <CardDetail strOption={strMeal || strDrink} strCategory={strCategory} />
      <IngredientOngoing
        ingredient={allIngredients}
        measure={allMeasures}
        idRecipe={idRecipe}
        type={type}
      />
      <InstructionsDetail instructions={strInstructions} />
      <FinishRecipeButton literals={'/receitas-feitas'} id={idRecipe} type={type} />
    </div>
  );
}

export default OngoingRecipe;

OngoingRecipe.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string.isRequired,
    params: PropTypes.objectOf(String).isRequired,
  }).isRequired,
  type: PropTypes.string.isRequired,
};
