import React, { useEffect, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { lookUpIdMeal } from '../service/apis';
import '../css/detailsPage.css';

import recipeConstructor from '../components/details/recipeconstructor.js';
import FavoriteContext from '../context/FavoriteContext';
import RecipeContext from '../context/RecipeContext';

import ImageDetail from '../components/details/ImageDetail';
import CardDetail from '../components/details/CardDetail';
import IngredientDetail from '../components/details/IngredientDetail';
import InstructionsDetail from '../components/details/InstructionsDetail';
import VideoDetails from '../components/details/VideoDetails';
import CarroselDetails from '../components/details/CarroselDetails';
import StartRecipe from '../components/details/StartRecipe';

function FoodDetails(props) {
  const { idRecipe } = props.match.params;
  const { favorite, isFavorite, loadFromStorage, recipes } = useContext(FavoriteContext);
  const { fetching, setFetching, setDetails, details } = useContext(RecipeContext);
  const { strMealThumb, strMeal, strInstructions, strYoutube, strArea, strCategory, idMeal } = details[0];
  const { allIngredients, allMeasures } = recipeConstructor(details[0]);
  useEffect(() => {
    setFetching(true);
    lookUpIdMeal(idRecipe).then((food) => setDetails(food.meals))
    .catch((error) => alert('Algo inesperado aconteceingredients;u:', error));
    // loadFromStorage();
    setFetching(false);
  }, []);
  
  if (fetching) return <div>Loading...</div>;
  return idRecipe ? (
    <div className="body-details">
      <p style={{ textAlign: 'center' }}>FoodDetails Page</p>
      <ImageDetail strOption={strMeal} thumb={strMealThumb} />
      <CardDetail
        id={idRecipe}
        type="comidas"
        image={strMealThumb}
        category={strCategory}
        area={strArea}
        alcoholicOrNot=""
        name={strMeal}
        />
      <IngredientDetail ingredient={allIngredients} measure={allMeasures} />
      <InstructionsDetail instructions={strInstructions} />
      <VideoDetails youtube={strYoutube} />
      <CarroselDetails recomendations="props" />
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
  
  // import {
    //   ImageDetail,
    //   CardDetail,
    //   IngredientDetail,
    //   InstructionsDetail,
    //   VideoDetail,
    //   CarrouselDetails,
    // } from '../components/details/details_index';
    
    // const [favorite, setFavorite] = useState(false);
    // const handleFavorite = () => {
      //   setFavorite(!favorite);
      