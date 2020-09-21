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
import StartRecipe from '../components/details/StartRecipe';
import ShareButton from '../components/details/ShareButton';
import FavoriteButton from '../components/details/FavoriteButton';
import '../css/details.css';
import FavoriteContext from '../context/FavoriteContext';

function DrinkDetails(props) {
  // console.log(props)
  const {
    location: { pathname }, match: { params: { idRecipe }, }, type } = props;
  // const { idRecipe } = props.match.params;
  const { readFromStorage, isFavorite } = useContext(FavoriteContext);
  const { fetching, setFetching, setDetails, details } = useContext(RecipeContext);
  const {
    strDrinkThumb,
    strDrink,
    strInstructions,
    strCategory,
    strAlcoholic,
    strArea = 'Unknown',
  } = details[0];
  const { allIngredients, allMeasures } = recipeConstructor(details[0]);
  const isItFavorite = readFromStorage() ? readFromStorage().some((itIs) => itIs.id === idRecipe) : false;
  console.log('carregado do localStoreage:' ,isItFavorite);
  const [favorite, setFavorite] = useState(isItFavorite);
  function handleFavorite(favoriteRecipeId) {
    // console.log(favoriteRecipeId);
    const favoritedRecipe = favorite ? idRecipe : { id: favoriteRecipeId, type: type, area: strArea, category: strCategory, alcoholicOrNot: strAlcoholic, name: strDrink, image: strDrinkThumb };
    // recipes = recipes.filter((card) => card.id !== favoriteRecipeId);
    console.log(favorite ? `Receita desfavoritada: ${favoritedRecipe}` : `Receita favoritada: ${favoritedRecipe}`);
    isFavorite(favoritedRecipe, !favorite);
    setFavorite(!favorite);
  }
  // uma saida no console pra vc saber o que esta manipulado
  // console.log(allIngredients, allMeasures);
  useEffect(() => {
    setFetching(true);
    lookUpIdDrink(idRecipe)
      .then((drink) => setDetails(drink.drinks))
      .catch((error) => alert('Algo inesperado aconteceingredients', error));
    setFetching(false);
  }, [favorite]);
  //
  if (fetching) return <div>Loading...</div>;
  //
  return idRecipe ? (
    <div className="body-details">
      <ImageDetail strOption={strDrink} thumb={strDrinkThumb} />
      <CardDetail strOption={strDrink} strCategory={strCategory} strAlcoholic={strAlcoholic} type={type} />
      <div className="icon-details">
        <FavoriteButton literals={'favorite-btn'} id={idRecipe} func={handleFavorite} idx="" favorite={favorite} />
        <ShareButton literals={'share-btn'} alt={strDrink} idx="" url={pathname} />
      </div>
      <CarroselDetailsFood recomendations="props" />
      <IngredientDetail ingredient={allIngredients} measure={allMeasures} />
      <InstructionsDetail instructions={strInstructions} />
      <StartRecipe literals={`${idRecipe}/in-progress`} />
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
