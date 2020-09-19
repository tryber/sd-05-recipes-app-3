import React, { useEffect, useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { lookUpIdDrink } from '../service/apis';
import RecipeContext from '../context/RecipeContext';
import '../css/details.css';
import { whiteHeartIcon } from '../images';
import { blackHeartIcon } from '../images';
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
import CarroselDetailsFood from '../components/details/CarroselDetailsFood';
import StartRecipe from '../components/details/StartRecipe';
import ShareButton from '../components/details/ShareButton';

function DrinkDetails(props) {
  const [favorite, setFavorite] = useState(false);
  const handleFavorite = () => {
    setFavorite(!favorite);
  };
  const { idRecipe } = props.match.params;
  const { fetching, setFetching, setDetails, details } = useContext(RecipeContext);
  const { strDrinkThumb, strDrink, strInstructions, strCategory, strAlcoholic } = details[0];
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
      Drink Details Page
      <ImageDetail strOption={strDrink} thumb={strDrinkThumb} />
      <CardDetail
        id{idRecipe}
        strOption={strDrink}
        favorite={favorite}
        blackHeartIcon={blackHeartIcon}
        whiteHeartIcon={whiteHeartIcon}
        handleFavorite={handleFavorite}
        strCategory={strCategory}
        strAlcoholic={strAlcoholic}
      />
      <ShareButton url={props} />
      <IngredientDetail ingredient={allIngredients} measure={allMeasures} />
      <InstructionsDetail instructions={strInstructions} />
      <CarroselDetailsFood recomendations="props" />
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
