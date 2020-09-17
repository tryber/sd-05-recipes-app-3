import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
    <h3 data-testid="recipe-category">{strCategory}{strAlcoholic}</h3>
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

export default CardDetail;

CardDetail.propTypes = {
  strOption: PropTypes.string.isRequired,
  favorite: PropTypes.bool.isRequired,
  handleFavorite: PropTypes.func.isRequired,
  blackHeartIcon: PropTypes.string.isRequired,
  whiteHeartIcon: PropTypes.string.isRequired,
  strAlcoholic: PropTypes.string.isRequired,
  strCategory: PropTypes.string.isRequired,
};
