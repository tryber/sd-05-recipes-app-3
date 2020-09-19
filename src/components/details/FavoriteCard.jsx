import { Link } from 'react-router-dom';
import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import FavoriteContext from '../../context/FavoriteContext';
import { whiteHeartIcon } from '../../images';
import { blackHeartIcon } from '../../images';
import { shareIcon } from '../../images';
import '../../css/details.css';

const SharingButton = (func, share, name, index) => (
  <div>
    <button type="button" className="icon" value="share" onClick={() => func()}>
      <img
        data-testid={`${index}-horizontal-share-btn`}
        src={share}
        alt={`sharing ${name} recipe`}
      />
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
  console.log('origem:', area, 'categoria:', category, 'tipo:', type);
  return (
    <div id={name} className={`body-card-${id}`}>
      <Link to={`${type}/${id}`}>
        <div className="image-details">
          <img data-testid={`${index}-horizontal-image`} src={image} alt={name} />
        </div>
      </Link>
      <div className="info-card">
        <h4>
          {type === 'comidas' ? (
            <span data-testid={`${index}-horizontal-top-text`}>
              {area}-{category}
            </span>
          ) : (
            <span data-testid={`${index}-horizontal-top-text`}>{alcoholicOrNot}</span>
          )}
        </h4>
        <Link to={`${type}/${id}`}>
          <h3 data-testid={`${index}-horizontal-name`}>{name}</h3>
        </Link>
        {SharingButton(handleSharing, shareIcon, name, index)}
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
