import React, { useEffect, useContext, useState } from 'react';
import { Redirect, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { lookUpIdMeal } from '../service/apis';
import RecipeContext from '../context/RecipeContext';
import '../css/Details.css';
import { whiteHeartIcon } from '../images';
import { blackHeartIcon } from '../images';
import { shareIcon } from '../images';
import { add } from 'lodash';

function FoodDetails(props) {
  const [favorite, setFavorite] = useState(false);
  const handleFavorite = () => {
    setFavorite(!favorite);
  };
  /* const receitaFavoritada = 
      { id, type, area, category, alcoholicOrNot, name, image }
    localStorage.setItem('favoriteRecipes', JSON.stringify({ receitaFavoritada })); */
  const { idRecipe } = props.match.params;
  const { fetching, setFetching, setDetails, details } = useContext(RecipeContext);
  const { strMealThumb, strMeal, strInstructions, strYoutube } = details[0];
  /* const instructions = details[0];
  const instructionKey = Object.keys(instructions).filter((instructions) => instruction.includes('strInstruction'));
  const ingredientValue = (ingredients);
  console.log(ingredientValue); */
  const recipeGetter = (ingredient) => {
    const items = Object.keys(ingredient)
      .filter((keysIngridients) => keysIngridients.includes('strIngredient'))
      .filter((value) => ingredient[value] !== '');
    const quantities = Object.keys(ingredient)
      .filter((qtIngridients) => qtIngridients.includes('strMeasure'))
      .filter((value) => ingredient[value] !== '');
    // construindo um array de ingredientes
    const allIngredients = items.map((value) => ingredient[value]);
    // construindo um array de medidas dos ingredientes
    const allMeasures = quantities.map((value) => ingredient[value]);
    return { allIngredients, allMeasures };
  };
  const { allIngredients, allMeasures } = recipeGetter(details[0]);
  // uma saida no console pra vc saber o que esta manipulado
  console.log(allIngredients, allMeasures);

  useEffect(() => {
    setFetching(true);
    lookUpIdMeal(idRecipe)
      .then((food) => setDetails(food.meals))
      // (food.meals) ?
      // setDetails(food.meals) : alert('Erro no servidor! tente novamente.'))
      .catch((error) => alert('Algo inesperado aconteceingredients;u:', error));
    setFetching(false);
  }, []);

  if (fetching) return <div>Loading...</div>;
  return idRecipe ? (
    <div>
      FoodDetails Page
      <div className="card-recipe">
        <img
          alt={strMeal}
          className="card-recipe-image"
          src={strMealThumb}
          data-testid="recipe-photo"
        />
        <div className="card-recipe-body">
          <h3 className="card-recipe-name" data-testid="recipe-title">
            {strMeal}
          </h3>
          <p data-testid="recipe-category"></p>
          <button data-testid="favorite-btn">
          <img
            src={favorite ? blackHeartIcon : whiteHeartIcon}
            alt="whiteHeart"
            onClick={() => handleFavorite()}
          />
          </button>
          <button data-testid="share-btn">
          <img src={shareIcon} alt="share" />
          </button>
          <h4>Ingredients</h4>
          <p data-testid="-ingredient-name-and-measure">
            {allIngredients.map((ingredient, i) => (
              <p>
                {ingredient} : {allMeasures[i]}
              </p>
            ))}
          </p>
          <h4>Instructions</h4>
          <p data-testid="instructions">{strInstructions}</p>
          <video width="320" height="240" controls>
            <source src={strYoutube} type="video/mp4" data-testid="video" />
          </video>
          <h4>Recomendadas</h4>
        </div>
        <Link to={`/comidas/${idRecipe}/in-progress`}>
          <button data-testid="start-recipe-btn">Iniciar Receita</button>
        </Link>
      </div>
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
