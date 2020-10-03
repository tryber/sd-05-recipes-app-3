import React, { useEffect, useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { lookUpIdDrink } from '../service/apis';
import RecipeContext from '../context/RecipeContext';
import recipeConstructor from '../components/details/recipeconstructor.js';
import ImageDetail from '../components/details/ImageDetail';
import CardDetail from '../components/details/CardDetail';
import IngredientDetail from '../components/details/IngredientDetail';
import InstructionsDetail from '../components/details/InstructionsDetail';
import CarroselDetailsFood from '../components/details/CarroselDetailsFood';
import StartRecipeButton from '../components/details/StartRecipeButton';
import ShareButton from '../components/details/ShareButton';
import FavoriteButton from '../components/details/FavoriteButton';
import '../css/details.css';
import FavoriteContext from '../context/FavoriteContext';

const checking = async (param, id) => {
  const progress = JSON.parse(
    localStorage.getItem('InProgressRecipes' || '{ meals: {}, cocktails: {}}'));
  if (progress.cocktails[id]) {
    return (await (progress.cocktails[id].length === param.length))
      ? (document
          .querySelector('.start-recipe-button')
          .getElementsByTagName('button')[0].style.display = 'none')
      : false;
  }
  return;
};

const SocialButtons = (ide, fav, u, func, name) => (
  <div className="icon-details">
    <FavoriteButton literals={'favorite-btn'} id={ide} func={func} idx="" favorite={fav} />
    <ShareButton literals={'share-btn'} alt={name} url={u} id={ide} />
  </div>
);

function DrinkDetails(props) {
  const {
    match: {
      params: { idRecipe },
      url,
    },
    type = 'bebida',
  } = props;
  console.log(url);
  const { readFromStorage, isFavorite } = useContext(FavoriteContext);
  const { fetching, setFetching, setDetails, details } = useContext(RecipeContext);
  const {
    strDrinkThumb,
    strDrink,
    strInstructions,
    strCategory,
    strAlcoholic = '',
    strArea = '',
  } = details;
  const { allIngredients, allMeasures } = recipeConstructor(details);
  checking(allIngredients, idRecipe);
  const isItFavorite = readFromStorage('favoriteRecipes')
    ? readFromStorage('favoriteRecipes').some((itIs) => itIs.id === idRecipe)
    : false;
  const [favorite, setFavorite] = useState(isItFavorite);
  function handleFavorite(favoriteRecipeId) {
    const favoritedRecipe = favorite
      ? idRecipe
      : {
        id: favoriteRecipeId,
        type,
        area: strArea,
        category: strCategory,
        alcoholicOrNot: strAlcoholic,
        name: strDrink,
        image: strDrinkThumb,
      };
    isFavorite(favoritedRecipe, !favorite);
    setFavorite(!favorite);
  }
  useEffect(() => {
    setFetching(true);
    lookUpIdDrink(idRecipe)
      .then((drink) => {
        if (drink.drinks) setDetails(drink.drinks[0]);
      })
      .catch((error) => alert('Algo inesperado aconteceingredients.', error));
    setFetching(false);
  }, [favorite]);
  if (fetching) return <div>Loading...</div>;
  const alc = strAlcoholic;
  return idRecipe ? (
    <div>
      <ImageDetail strOption={strDrink} thumb={strDrinkThumb} />
      <div className="body-details">
        {SocialButtons(idRecipe, favorite, url, handleFavorite, strDrink)}
        <CardDetail
          strOption={strDrink}
          strCategory={strCategory}
          strArea={strArea}
          alc={alc}
          type={type}
        />
        <CarroselDetailsFood />
        <IngredientDetail ingredient={allIngredients} measure={allMeasures} />
        <InstructionsDetail instructions={strInstructions} />
        <StartRecipeButton literals={`${idRecipe}/in-progress`} id={idRecipe} type={type} />
      </div>
    </div>
  ) : (
    <Redirect to="/bebidas/">{alert('Não foi possível te surpreender desta vez!')}</Redirect>
  );
}

export default DrinkDetails;

DrinkDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.objectOf(String).isRequired,
  }).isRequired,
  type: PropTypes.string.isRequired,
};
