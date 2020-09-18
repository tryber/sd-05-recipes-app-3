import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { whiteHeartIcon } from '../../images';
import { blackHeartIcon } from '../../images';
import { shareIcon } from '../../images';
import FavoriteContext from '../../context/FavoriteContext';

const CardDetail = (props) => {
  const { id, type, area, category, alcoholicOrNot, name, image } = props;
  const { loadFromStorage, isFavorite } = useContext(FavoriteContext);
  const recipes = loadFromStorage();
  const isItFavorite = (recipes) ? recipes.some(itIs => itIs.id === id) : false;
  const [favorite, setFavorite] = useState(isItFavorite);

  function handleFavorite({ id, type, area, category, alcoholicOrNot, name, image }) {
    const favoriteRecipe = { id, type, area, category, alcoholicOrNot, name, image };
    // setFavorite(!favorite);
    console.log('Details Page:', !favorite);
    isFavorite(favoriteRecipe, favorite);
  };
    return (
      <div className="card-details">
        <h3 data-testid="recipe-title">{name}</h3>
        <p data-testid="recipe-category">Categoria Drink or Food</p>
        <div className="icon">
          <button
          type="button"
            onClick={() => {
              setFavorite(!favorite);
              handleFavorite(props);
            }
            }
          >
            <img
              data-testid="favorite-btn"
              src={favorite ? blackHeartIcon : whiteHeartIcon}
              alt="favoriteHeart"
            />
          </button>
        </div>
        <div className="icon">
          <button>
            <img data-testid="share-btn" src={shareIcon} alt="share" />
          </button>
        </div>
      </div>
    );
}

export default CardDetail;

CardDetail.propTypes = {
  strOption: PropTypes.string.isRequired,
  favorite: PropTypes.bool.isRequired,
  handleFavorite: PropTypes.func.isRequired,
  blackHeartIcon: PropTypes.string.isRequired,
  whiteHeartIcon: PropTypes.string.isRequired,
  shareIcon: PropTypes.string.isRequired,
};
