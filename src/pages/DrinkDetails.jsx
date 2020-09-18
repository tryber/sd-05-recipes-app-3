import React, { useEffect, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { lookUpIdDrink } from '../service/apis';
import '../css/details.css';
// import { whiteHeartIcon } from '../images';
// import { blackHeartIcon } from '../images';
// import { shareIcon } from '../images';
import recipeConstructor from '../components/details/recipeconstructor.js';
import RecipeContext from '../context/RecipeContext';
// import FavoriteContext from '../context/FavoriteContext';

import ImageDetail from '../components/details/ImageDetail';
import CardDetail from '../components/details/CardDetail';
import IngredientDetail from '../components/details/IngredientDetail';
import InstructionsDetail from '../components/details/InstructionsDetail';
// import VideoDetails from '../components/details/VideoDetails';
import CarroselDetailsFood from '../components/details/CarroselDetailsFood';
import StartRecipe from '../components/details/StartRecipe';
import ShareButton from '../components/details/ShareButton';

function DrinkDetails(props) {
  const { idRecipe } = props.match.params;
  // const { favorite, isFavorite, loadFromStorage } = useContext(FavoriteContext);
  const { fetching, setFetching, setDetails, details } = useContext(RecipeContext);
  const {
    strDrinkThumb,
    strDrink,
    strInstructions,
    strArea,
    strCategory,
    strAlcoholic,
  } = details[0];
  //
  // console.log(details[0]);
  //
  const { allIngredients, allMeasures } = recipeConstructor(details[0]);
  //
  useEffect(() => {
    setFetching(true);
    lookUpIdDrink(idRecipe)
      .then((drink) => setDetails(drink.drinks))
      .catch((error) => alert('Algo inesperado aconteceu, recarregue a pagina!', error.message));
    setFetching(false);
  }, []);

  if (fetching) return <div>Loading...</div>;
  return idRecipe ? (
    <div className="body-details">
      Drink Details Page
      <ImageDetail strOption={strDrink} thumb={strDrinkThumb} />
      <CardDetail
        id={idRecipe}
        type="bebidas"
        image={strDrinkThumb}
        category={strCategory}
        area={strArea}
        alcoholicOrNot={strAlcoholic}
        name={strDrink}
      />
      <ShareButton url={props} />
      <IngredientDetail ingredient={allIngredients} measure={allMeasures} />
      <InstructionsDetail instructions={strInstructions} />
      {/* <VideoDetails youtube={strYoutube} /> */}
      <CarroselDetailsFood recomendations="props" />
      <StartRecipe literals={`/bebidas/${idRecipe}/in-progress`} />
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
};
// import {
//   ImageDetail,
//   CardDetail,
//   IngredientDetail,
//   InstructionsDetail,
//   VideoDetail,
//   CarrouselDetails,
//   StartRecipe,
// } from '../components/details/details_index.js';

/*
    const receitaFavoritada =
    { id, type, area, category, alcoholicOrNot, name, image }
    localStorage.setItem('favoriteRecipes', JSON.stringify({ receitaFavoritada }));
    */

// const [favorite, setFavorite] = useState(false);
// const handleFavorite = () => {
//   setFavorite(!favorite);
// };
