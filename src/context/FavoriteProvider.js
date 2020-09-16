import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FavoriteContext } from './RecipeContext'

const Favoriteprovider = ({ children }) => {
const [favorite, setFavorite] = useState(false);

const isFavorite = ({ id,
  type,
  area,
  category,
  alcoholicOrNot,
  name,
  image,
}) => {
  setFavorite(!favorite);
  salveInStorage()
}

const context = {
  isFavorite,
  favorite,
};

return (
<FavoriteContext.Provider value={context} >{children}</FavoriteContext.Provider>
)
}

export default Favoriteprovider;

Favoriteprovider.propTypes = {
  children: PropTypes.objectOf(Object).isRequired,
};
