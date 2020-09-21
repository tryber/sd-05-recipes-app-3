import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import { whiteHeartIcon } from '../../images';
import { blackHeartIcon } from '../../images';
// import '../../css/details.css';
//
function FavoriteButton(props) {
  const { id, func, idx, favorite } = props;
  // const [favorite, setFavorite] = useState(false);
  // const handleFavorite = () => {
  //   setFavorite(!favorite);
  // };
  return (
    <div className="icon-favorite">
      <button type="button" className="icon" value={id} onClick={() => func(id)}>
        <img
          data-testid={`${idx}-horizontal-favorite-btn`}
          src={favorite ? blackHeartIcon : whiteHeartIcon}
          alt={favorite ? 'blackHeart' : 'whiteHeart'}
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
