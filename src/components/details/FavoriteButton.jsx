import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import { whiteHeartIcon } from '../../images';
import { blackHeartIcon } from '../../images';
import '../../css/details.css';
//
function FavoriteButton(props) {
  const [favorite, setFavorite] = useState(false);
  const handleFavorite = () => {
    setFavorite(!favorite);
  };
  //
  console.log(props);
  //
  return (
    <div className="icon">
      <button onClick={() => handleFavorite()}>
        <img
          data-testid="favorite-btn"
          src={favorite ? blackHeartIcon : whiteHeartIcon}
          alt="whiteHeart"
        />
      </button>
    </div>
  );
}

export default FavoriteButton;

// FavoriteButton.propTypes = {
//   favorite: PropTypes.bool.isRequired,
//   handleFavorite: PropTypes.func.isRequired,
//   blackHeartIcon: PropTypes.string.isRequired,
//   whiteHeartIcon: PropTypes.string.isRequired,
// };
