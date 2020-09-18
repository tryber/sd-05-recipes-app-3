import { Link } from 'react-router-dom';
import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import FavoriteContext from '../../context/FavoriteContext';
import { whiteHeartIcon } from '../../images';
import { blackHeartIcon } from '../../images';
import { shareIcon } from '../../images';

const SharingButton = (func, share, name) => (
  <div>
    <button type="button" className="icon" value="share" onClick={() => func()}>
      <img data-testid="share" src={share} alt={`sharing ${name} recipe`} />
    </button>
  </div>
);

const FavoriteButton = (id, handle, index, favorite, blackHeart, whiteHeart) => (
  <div>
    <button type="button" className="icon" value={id} onClick={() => handle(id)}>
      <img
        data-testid={`${index}-horizontal-favorite-btn`}
        src={favorite ? blackHeart : whiteHeart}
        alt="favorited recipe"
      />
    </button>
  </div>
);

function FavoriteCard(props) {
  const { id, index, image, name, category, area, alcoholicOrNot, type, recipes } = props;
  const { loadFromStorage, isFavorite } = useContext(FavoriteContext);
  const fromStore = loadFromStorage();
  const isItFavorite = fromStore.some((itIs) => itIs.id === id);
  const [favorite, setFavorite] = useState(isItFavorite);
  //
  const handleFavorite = (ide) => {
    const disFavorite = recipes.filter((curValue) => curValue.id === ide);
    // console.log('Receita a ser deletada:', disFavorite);
    //
    if (disFavorite) {
      // console.log(favorite);
      document.querySelector(`.body-card-${id}`).remove();
      isFavorite(...disFavorite, favorite);
      setFavorite(!favorite);
    }
  };
  //
  const handleSharing = () => console.log('sharingButton');
  //
  return (
    <div id={name} className={`body-card-${id}`}>
      <Link to={`${type}/${id}`}>
        <div className="image-card">
          <img data-testid="image" src={image} alt={name} />
        </div>
      </Link>
      <div className="info-card">
        <h4>
          {type === 'comidas' ? (
            <span>
              {area}-{category}
            </span>
          ) : (
            <span>{alcoholicOrNot}</span>
          )}
        </h4>
        <Link to={`${type}/${id}`}>
          <h3>{name}</h3>
        </Link>
        {SharingButton(handleSharing, shareIcon, name)}
        {FavoriteButton(id, handleFavorite, index, favorite, blackHeartIcon, whiteHeartIcon)}
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
};
