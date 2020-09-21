import React from 'react';
import PropTypes from 'prop-types';
import { whiteHeartIcon } from '../../images';
import { blackHeartIcon } from '../../images';
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

FavoriteButton.propTypes = {
  idx: PropTypes.number.isRequired,
  func: PropTypes.func.isRequired,
  favorite: PropTypes.bool.isRequired,
  id: PropTypes.string,
};

FavoriteButton.defaultProps = {
  id: 'string',
};
