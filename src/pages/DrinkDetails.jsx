import React, { useEffect, useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { lookUpIdDrink } from '../service/apis';
import RecipeContext from '../context/RecipeContext';
import '../css/Details.css';
import { whiteHeartIcon } from '../images';
import { blackHeartIcon } from '../images';
import { shareIcon } from '../images';
import recipeConstructor from '../components/details/recipeconstructor.js';
// import {
//   ImageDetail,
//   CardDetail,
//   IngredientDetail,
//   InstructionsDetail,
//   VideoDetail,
//   CarrouselDetails,
//   StartRecipe,
// } from '../components/details/details_index.js';

import ImageDetail from '../components/details/ImageDetail';
import CardDetail from '../components/details/CardDetail';
import IngredientDetail from '../components/details/IngredientDetail';
import InstructionsDetail from '../components/details/InstructionsDetail';
import VideoDetails from '../components/details/VideoDetails';
import CarroselDetails from '../components/details/CarroselDetails';
import StartRecipe from '../components/details/StartRecipe';

function DrinkDetails(props) {
  const [favorite, setFavorite] = useState(false);
  const handleFavorite = () => {
    setFavorite(!favorite);
  };
  const { idRecipe } = props.match.params;
  const { fetching, setFetching, setDetails, details } = useContext(RecipeContext);
  const { strDrinkThumb, strDrink, strInstructions, strYoutube } = details[0];
  const { allIngredients, allMeasures } = recipeConstructor(details[0]);
  // uma saida no console pra vc saber o que esta manipulado
  // console.log(allIngredients, allMeasures);
  useEffect(() => {
    setFetching(true);
    lookUpIdDrink(idRecipe)
      .then((drink) => setDetails(drink.drinks))
      .catch((error) => alert('Algo inesperado aconteceingredients;u:', error));
    setFetching(false);
  }, []);

  if (fetching) return <div>Loading...</div>;
  return idRecipe ? (
    <div className="body-details">
      FoodDetails Page
      <ImageDetail strOption={strDrink} thumb={strDrinkThumb} />
      <CardDetail
        strOption={strDrink}
        favorite={favorite}
        blackHeartIcon={blackHeartIcon}
        whiteHeartIcon={whiteHeartIcon}
        shareIcon={shareIcon}
        handleFavorite={handleFavorite}
      />
      <IngredientDetail ingredient={allIngredients} measure={allMeasures} />
      <InstructionsDetail instructions={strInstructions} />
      <VideoDetails youtube={strYoutube} />
      <CarroselDetails recomendations="props" />
      <StartRecipe literals={`/bebidas/${idRecipe}/in-progress`} />
    </div>
  ) : (
    <Redirect to="/bebidas/">{alert('Não foi possível te surpreender desta vez!')}</Redirect>
  );
}

/*
const receitaFavoritada =
  { id, type, area, category, alcoholicOrNot, name, image }
  localStorage.setItem('favoriteRecipes', JSON.stringify({ receitaFavoritada }));
  */

export default DrinkDetails;

DrinkDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.objectOf(String).isRequired,
  }).isRequired,
};
