import React from 'react';
import PropTypes from 'prop-types';
import { whiteHeartIcon } from '../../images';
import { blackHeartIcon } from '../../images';
//
function FavoriteButton(props) {
  const { id, func, favorite, literals } = props;
  return (
    <div className="icon-favorite">
      <button type="button" className="icon" value={id} onClick={() => func(id)}>
        <img
          data-testid={literals}
          src={favorite ? blackHeartIcon : whiteHeartIcon}
          alt={favorite ? 'blackHeart' : 'whiteHeart'}
        />
      </button>
    </div>
  );
}

export default FavoriteButton;

FavoriteButton.propTypes = {
  func: PropTypes.func.isRequired,
  favorite: PropTypes.bool.isRequired,
  id: PropTypes.string,
  literals: PropTypes.string.isRequired,
};

FavoriteButton.defaultProps = {
  id: 'string',
};
