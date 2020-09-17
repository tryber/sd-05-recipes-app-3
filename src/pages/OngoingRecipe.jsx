import React, { useEffect, useContext, useState } from 'react';
import { Redirect, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { lookUpIdMeal } from '../service/apis';
import RecipeContext from '../context/RecipeContext';
import '../css/Details.css';
import { whiteHeartIcon } from '../images';
import { blackHeartIcon } from '../images';
import { shareIcon } from '../images';
import recipeConstructor from '../components/details/recipeconstructor.js';
import ImageDetail from '../components/details/ImageDetail';
import CardDetail from '../components/details/CardDetail';
import IngredientOngoing from '../components/details/IngredientOngoing';
import InstructionsDetail from '../components/details/InstructionsDetail';

function OngoingRecipe(props) {
  const { done } = useContext(RecipeContext);
  const [favorite, setFavorite] = useState(false);
  const handleFavorite = () => {
    setFavorite(!favorite);
  };
  const { idRecipe } = props.match.params;
  const { fetching, setFetching, setDetails, details } = useContext(RecipeContext);
  const { strMealThumb, strMeal, strInstructions, strCategory } = details[0];
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
    <div data-testid="ingredient-step" className="body-details">
      <ImageDetail strOption={strMeal} thumb={strMealThumb} />
      <CardDetail
        strOption={strMeal}
        strCategory={strCategory}
        favorite={favorite}
        blackHeartIcon={blackHeartIcon}
        whiteHeartIcon={whiteHeartIcon}
        shareIcon={shareIcon}
        handleFavorite={handleFavorite}
      />
      <IngredientOngoing ingredient={allIngredients} measure={allMeasures} />
      <InstructionsDetail instructions={strInstructions} />
      {done && <Link to="/receitas-feitas"><button data-testid="finish-recipe-btn" type="button">Finalizar Receita</button></Link>}
    </div>
  ) : (
    <Redirect to="/comidas/">{alert('Não foi possível te surpreender desta vez!')}</Redirect>
  );
}

OngoingRecipe.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.objectOf(String).isRequired,
  }).isRequired,
};

export default OngoingRecipe;
