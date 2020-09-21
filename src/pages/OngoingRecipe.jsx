import React, { useContext, useEffect, useState } from 'react';
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
import FavoriteContext from '../context/FavoriteContext';

function OngoingRecipe(props) {
  // const { idRecipe } = props.match.params;
  const { setFetching, ongoing, setOngoing } = useContext(RecipeContext);
  const { readFromStorage, isFavorite } = useContext(FavoriteContext);
  const {
    location: { pathname }, match: { params: { idRecipe }, }, type } = props;
  const isItFavorite = readFromStorage()
    ? readFromStorage().some((itIs) => itIs.id === idRecipe)
    : false;
  const [favorite, setFavorite] = useState(isItFavorite);
  function handleFavorite(favoriteRecipeId) {
    const favoritedRecipe = {
      id: favoriteRecipeId,
      type: type,
      area: strArea,
      category: strCategory,
      alcoholicOrNot: strAlcoholic,
      name: strDrink,
      image: strDrinkThumb,
    };
    // recipes = recipes.filter((card) => card.id !== favoriteRecipeId);
    isFavorite(favoritedRecipe, favorite);
    setFavorite(!favorite);
    console.log(favorite ? 'Receita desfavoritada:' : 'Receita favoritada:', favoritedRecipe);
  }
  const {
    strMealThumb,
    strMeal,
    strDrinkThumb,
    strDrink,
    strInstructions,
    strCategory,
    strArea,
    strAlcoholic,
  } = ongoing[0];
  // 
  const name = type === 'comidas' ? strMeal : strDrink;
  const thumb = type === 'comidas' ? strMealThumb : strDrinkThumb;
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
      <ImageDetail strOption={name} thumb={thumb} />
      <CardDetail
        strOption={strMeal || strDrink}
        trCategory={strCategory}
      />
      <FavoriteButton id={idRecipe} func={handleFavorite} idx="" favorite={favorite} />
      <ShareButton url={pathname} literals={'-share-btn'} alt={name} idx='' />
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
