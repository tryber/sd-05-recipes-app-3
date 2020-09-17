import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CardDetail extends Component {
  // constructor(props){
  //   super(props);
  // }
  render() {
    const {
      strOption,
      strCategory,
      favorite,
      blackHeartIcon,
      whiteHeartIcon,
      shareIcon,
      handleFavorite,
    } = this.props;
    return (
      <div className="card-details">
        <h3 data-testid="recipe-title">{strOption}</h3>
        <p data-testid="recipe-category">{strCategory}</p>
        <div className="icon">
          <button onClick={() => handleFavorite()}>
            <img
              data-testid="favorite-btn"
              src={favorite ? blackHeartIcon : whiteHeartIcon}
              alt="whiteHeart"
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
}

export default CardDetail;

CardDetail.propTypes = {
  strOption: PropTypes.string.isRequired,
  strCategory: PropTypes.string.isRequired,
  favorite: PropTypes.bool.isRequired,
  handleFavorite: PropTypes.func.isRequired,
  blackHeartIcon: PropTypes.string.isRequired,
  whiteHeartIcon: PropTypes.string.isRequired,
  shareIcon: PropTypes.string.isRequired,
};
