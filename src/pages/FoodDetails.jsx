import React, { useEffect, useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { lookUpIdMeal } from '../service/apis';
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
  // } from '../components/details/details_index';

import ImageDetail from '../components/details/ImageDetail';
import CardDetail from '../components/details/CardDetail';
import IngredientDetail from '../components/details/IngredientDetail';
import InstructionsDetail from '../components/details/InstructionsDetail';
import VideoDetails from '../components/details/VideoDetails';
import CarroselDetails from '../components/details/CarroselDetails';
import StartRecipe from '../components/details/StartRecipe';
import ShareButton from '../components/details/ShareButton';


function FoodDetails(props) {
  const [favorite, setFavorite] = useState(false);
  const handleFavorite = () => {
    setFavorite(!favorite);
  };
  const { idRecipe } = props.match.params;
  const { fetching, setFetching, setDetails, details } = useContext(RecipeContext);
  const { strMealThumb, strMeal, strInstructions, strYoutube, strCategory } = details[0];
  const { allIngredients, allMeasures } = recipeConstructor(details[0]);
  // uma saida no console pra vc saber o que esta manipulado
  // console.log(allIngredients, allMeasures);
  useEffect(() => {
    setFetching(true);
    lookUpIdMeal(idRecipe)
      .then((food) => setDetails(food.meals))
      .catch((error) => alert('Algo inesperado aconteceingredients;u:', error));
    setFetching(false);
  }, []);

  if (fetching) return <div>Loading...</div>;
  return idRecipe ? (
    <div className="body-details">
      <p style={{ textAlign: 'center' }}>FoodDetails Page</p>
      <ImageDetail strOption={strMeal} thumb={strMealThumb} />
      <CardDetail
        strOption={strMeal}
        favorite={favorite}
        blackHeartIcon={blackHeartIcon}
        whiteHeartIcon={whiteHeartIcon}
        handleFavorite={handleFavorite}
        strCategory={strCategory}
      />
      <ShareButton url={props} />
      <IngredientDetail ingredient={allIngredients} measure={allMeasures} />
      <InstructionsDetail instructions={strInstructions} />
      <VideoDetails youtube={strYoutube} />
      <CarroselDetails />
      <StartRecipe literals={`/comidas/${idRecipe}/in-progress`} />
    </div>
  ) : (
    <Redirect to="/comidas/">{alert('Não foi possível te surpreender desta vez!')}</Redirect>
  );
}

FoodDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.objectOf(String).isRequired,
  }).isRequired,
};

export default FoodDetails;

/* const receitaFavoritada =
  { id, type, area, category, alcoholicOrNot, name, image }
  localStorage.setItem('favoriteRecipes', JSON.stringify({ receitaFavoritada })); */
