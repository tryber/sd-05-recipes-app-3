// Cesar me explicou
import React from 'react';
import PropTypes from 'prop-types';
import copy from 'clipboard-copy';
import shareIcon from '../../images/shareIcon.svg';

function copyToClipboard(url, idRecipe) {
  const copied = document.getElementById('share-button').innerHTML = 'Link copiado!';
  if (url.includes('comida')) {
    copy(`http://localhost:3000/comidas/${idRecipe}`)
      .then(() => alert(copied));
  }
  if (url.includes('bebida')) {
    copy(`http://localhost:3000/bebidas/${idRecipe}`)
      .then(() => alert(copied));
  }
}
// honestidade acadêmica: ajuda do grupo 4

function ShareButton(props) {
  const { idRecipe, url } = props;
  /* const { pathname } = props.url.location;
  console.log(pathname); */   
  return (
    <div className="icon">
      <input
        id="share-button"
        style={{ textDecoration: 'none' }}
        type="image"
        src={shareIcon}
        alt="Share Button"
        data-testid="share-btn"
        // value={pathname}
        onClick={() => copyToClipboard(url, idRecipe)}
      />
    </div>
  );
}

export default ShareButton;

ShareButton.propTypes = {
  url: PropTypes.shape({
    location: PropTypes.string.isRequired,
  }).isRequired,
};