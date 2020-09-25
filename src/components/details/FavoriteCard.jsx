import { Link } from 'react-router-dom';
import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import FavoriteContext from '../../context/FavoriteContext';
import '../../css/favorite.css';
import ShareButton from './ShareButton';
import FavoriteButton from './FavoriteButton';

function FavoriteCard(props) {
  const { alcoholicOrNot, type, recipes, setReload, reload } = props;
  const { id, index, image, name, category, area, url } = props;
  const { readFromStorage, getDesfavorited } = useContext(FavoriteContext);
  const isItFavorite = readFromStorage('favoriteRecipes').some((itIs) => itIs.id === id);
  const [favorite, setFavorite] = useState(isItFavorite);
  const literal = `/${type}s/${id}`;
  const handleFavorite = (ide) => {
    const disFavorite = recipes.filter((curValue) => curValue.id === ide).map((card) => card.id);
    if (disFavorite) {
      getDesfavorited(...disFavorite, !favorite);
      setFavorite(favorite);
      setReload(!reload);
    }
  };
  //
  return (
    <div id={name} className="card-body">
      <Link to={`${type}s/${id}`}>
        <div className="image">
          <img data-testid={`${index}-horizontal-image`} src={image} alt={name} />
        </div>
      </Link>
      <div className="details">
        <div className="info">
          {type === 'comida' ? (
            <p data-testid={`${index}-horizontal-top-text`}>{`${area} - ${category}`}</p>
          ) : (
            <p data-testid={`${index}-horizontal-top-text`}>{alcoholicOrNot}</p>
          )}
          <Link to={literal}>
            <h3 data-testid={`${index}-horizontal-name`}>{name}</h3>
          </Link>
        </div>
        <div className="icon-favorites">
          <ShareButton literals={`${index}-horizontal-share-btn`} alt={name} url={url} id={id} />
          <FavoriteButton
            id={id}
            func={handleFavorite}
            // idx={index}
            favorite={favorite}
            literals={`${index}-horizontal-favorite-btn`}
          />
        </div>
      </div>
    </div>
  );
}

export default FavoriteCard;

FavoriteCard.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  area: PropTypes.string.isRequired,
  alcoholicOrNot: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  recipes: PropTypes.arrayOf(Object).isRequired,
  setReload: PropTypes.func.isRequired,
  reload: PropTypes.bool.isRequired,
  url: PropTypes.objectOf(String).isRequired,
};
/* <ShareButton literals={`${index}-horizontal-share-btn`}
// alt={name} idx={index} url={props} id={id}/> */
