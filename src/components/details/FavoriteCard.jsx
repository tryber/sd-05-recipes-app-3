import { Link } from 'react-router-dom';
import React, { useContext, useState } from 'react';
import FavoriteContext from '../../context/FavoriteContext';
import { whiteHeartIcon } from '../../images';
import { blackHeartIcon } from '../../images';
import { shareIcon } from '../../images';

function FavoriteCard(props) {
  const { id, index, image, name, category, area, alcoholicOrNot, type, recipes } = props;
  const { loadFromStorage, isFavorite, deleteFromStorage } = useContext(FavoriteContext);
  const fromStore = loadFromStorage();
  const isItFavorite = fromStore.some(itIs => itIs.id === id)
  const [favorite, setFavorite] = useState(isItFavorite);
  console.log(id, index, image, name, category, area, alcoholicOrNot, type, recipes );
  
  
  const handleFavorite = (id) => {
    console.log(id)
    const disFavorite = recipes.filter((curValue) => (curValue.id === id));
    console.log('Favorite Page:', disFavorite);
    if (disFavorite) {
      console.log(favorite);
      document.querySelector(`.body-card-${id}`).remove();
      isFavorite(...disFavorite, favorite);
    }
  }

  const handleSharing = () => {
  }

  return (
    <div id={name}  className={`body-card-${id}`}>
      <Link to={`${type}/${id}`}>
        <div className="image-card">
          <img data-testid="image" src={image} alt={name}></img>
        </div>
      </Link>
      <div className="info-card">
        <h4>
          {type === 'comidas' ? <span>{area}-{category}</span>
           : <span>{alcoholicOrNot}</span>}
        </h4>
        <Link to={`${type}/${id}`}>
          <h3>{name}</h3>
        </Link>
        <div>
          <button type="button" className="icon" value="share" onClick={handleSharing}>
            <img data-testid="share" src={shareIcon} alt={`sharing ${name} recipe`}/>
          </button>
          <button type="button" className="icon" value={id} onClick={() => handleFavorite(id)}>
            <img
              data-testid={`${index}-horizontal-favorite-btn`}
              src={favorite ? blackHeartIcon : whiteHeartIcon}
              alt="favorited recipe"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default FavoriteCard;
