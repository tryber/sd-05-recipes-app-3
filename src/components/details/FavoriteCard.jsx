import { Link } from 'react-router-dom';
import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import FavoriteContext from '../../context/FavoriteContext';
import '../../css/favorite.css';
import ShareButton from './ShareButton';
import FavoriteButton from './FavoriteButton';

function FavoriteCard(props) {
  const { id, index, image, name, category, area, alcoholicOrNot, type, recipes, setReload, reload } = props;
  const { readFromStorage, getDesfavorited } = useContext(FavoriteContext);
  const isItFavorite = readFromStorage().some((itIs) => itIs.id === id);
  const [favorite, setFavorite] = useState(isItFavorite);

  // useEffect(() => {
  //   //   setFavorite(isItFavorite);
  //   setFavorite(isItFavorite)
  // }, []);
  //
  const handleFavorite = (ide) => {
    const disFavorite = recipes.filter((curValue) => curValue.id === ide).map(id => id.id);
    // console.log('Receita a ser deletada:', disFavorite);
    if (disFavorite) {
      getDesfavorited(...disFavorite, !favorite);
      setFavorite(favorite);
      setReload(!reload);

      // document.querySelector(`.body-card-${id}`).remove();
    }
  };
  console.log(favorite);
  //
  return (
    <div id={name} className="card-body" >
      <Link to={`${type}/${id}`}>
        <div className="image">
          <img data-testid={`${index}-horizontal-image`} src={image} alt={name} />
        </div>
      </Link>
      <div className="card-details">
        <div classname="info">
          {type === 'comidas' ? (
            <p data-testid={`${index}-horizontal-top-text`}>
              {`${area} - ${category}`}
            </p>
          ) : (
            <p data-testid={`${index}-horizontal-top-text`}>{alcoholicOrNot}</p>
          )}
        <Link to={`/${type}/${id}`}>
          <h3 data-testid={`${index}-horizontal-name`}>{name}</h3>
        </Link>
        </div>
        <div className="icon-favorites">
        <ShareButton literals={`${index}-horizontal-share-btn`} alt={name} idx={index} url={props} id={id}/>
        {/* {SharingButton(handleSharing, shareIcon, name, index)} */}
        <FavoriteButton id={id} func={handleFavorite} idx={index} favorite={favorite} />
        {/* {FavoriteButton(id, handle, index, favorite)} */}
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
};

// const SharingButton = (func, share, name, index) => (
//   <div>
//     <button type="button" className="icon" value="share" onClick={() => func()}>
//       <img
//         data-testid={`${index}-horizontal-share-btn`}
//         src={share}
//         alt={`sharing ${name} recipe`}
//       />
//     </button>
//   </div>
// );

// const FavoriteButton = (id, handle, index, favorite, blackHeart, whiteHeart) => (
//   <div>
//     <button type="button" className="icon" value={id} onClick={() => handle(id)}>
//       <img
//         data-testid={`${index}-horizontal-favorite-btn`}
//         src={favorite ? blackHeart : whiteHeart}
//         alt={favorite ? "blackHeart" : "whiteHeart"}
//       />
//     </button>
//   </div>
// );

//
// const handleSharing = () => console.log('sharingButton');
// console.log('origem:', area, 'categoria:', category, 'tipo:', type);
