import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
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
import { lookUpIdMeal, lookUpIdDrink } from '../service/apis';

function OngoingRecipe(props) {
  const { idRecipe } = props.match.params;
  const [favorite, setFavorite] = useState(false);
  const handleFavorite = () => {
    setFavorite(!favorite);
  };
  const { setFetching, ongoing, setOngoing, page } = useContext(RecipeContext);
  const { strMealThumb, strMeal, strDrinkThumb, strDrink, strInstructions, strCategory } = ongoing[0];
  const { allIngredients, allMeasures } = recipeConstructor(ongoing[0]);
  // uma saida no console pra vc saber o que esta manipulado
  // console.log(allIngredients, allMeasures);
  useEffect(() => {
    setFetching(true);
    if (props.type === 'comida') {
      console.log('food', idRecipe)
      lookUpIdMeal(idRecipe)
      .then((food) => setOngoing(food.meals))
      .catch((error) => console.log('comida', error));
    }
    else if (props.type === 'bebida') {
      console.log('drink', idRecipe)
      lookUpIdDrink(idRecipe)
      .then((drink) => setOngoing(drink.drinks))
      .catch((error) => console.log('bebida', error));
    }
    setFetching(false);
  }, []);

  return (
    <div className="body-details">
      <ImageDetail
        strOption={strMeal ? strMeal : strDrink}
        thumb={strMealThumb ? strMealThumb : strDrinkThumb} />
      <CardDetail
        strOption={strMeal ? strMeal : strDrink}
        strCategory={strCategory}
        favorite={favorite}
        blackHeartIcon={blackHeartIcon}
        whiteHeartIcon={whiteHeartIcon}
        shareIcon={shareIcon}
        handleFavorite={handleFavorite}
      />
      <IngredientOngoing ingredient={allIngredients} measure={allMeasures} />
      <InstructionsDetail instructions={strInstructions} />
      <Link to="/receitas-feitas">
        <button data-testid="finish-recipe-btn" type="button" id="btn" disabled>Finalizar Receita</button>
      </Link>
    </div>
  );
}

OngoingRecipe.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.objectOf(String).isRequired,
  }).isRequired,
};

export default OngoingRecipe;
