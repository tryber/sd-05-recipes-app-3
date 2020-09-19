import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { whiteHeartIcon } from '../../images';
import { blackHeartIcon } from '../../images';
import { shareIcon } from '../../images';
import FavoriteContext from '../../context/FavoriteContext';

class CardDetail extends Component {
  // constructor(props){
  //   super(props);
  // }
  render() {
    const {
      strOption,
      favorite,
      blackHeartIcon,
      whiteHeartIcon,
      handleFavorite,
      strCategory,
      strAlcoholic,
    } = this.props;
    return (
      <div className="card-details">
        <h1 data-testid="recipe-title">{strOption}</h1>
        <h3 data-testid="recipe-category">
          {strCategory}
          {strAlcoholic}
        </h3>
        <div className="icon">
          <button onClick={() => handleFavorite()}>
            <img
              data-testid="favorite-btn"
              src={favorite ? blackHeartIcon : whiteHeartIcon}
              alt="whiteHeart"
            />
          </button>
        </div>
      </div>
    );
  }
}

  function handleFavorite(favoriteRecipe) {
    isFavorite(favoriteRecipe, favorite);
  }
  return (
    <div className="card-details">
      <h3 data-testid="recipe-title">{strOption}</h3>
      <p data-testid="recipe-category">{strCategory}</p>
      {/*  <p data-testid="recipe-category">{type.toUpperCase()}</p> */}
      <div className="icon">
        <button
          type="button"
          onClick={() => {
            setFavorite(!favorite);
            handleFavorite(props);
          }}
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
};
export default CardDetail;

CardDetail.propTypes = {
  strOption: PropTypes.string.isRequired,
  pTypes.string.isRequired,
  favorite: PropTypes.bool.isRequired,
  handleFavorite: PropTypes.func.isRequired,
  blackHeartIcon: PropTypes.string.isRequired,
  whiteHeartIcon: PropTypes.string.isRequired,
  strAlcoholic: PropTypes.string.isRequired,
  strCategory: PropTypes.string.isRequired,
};
