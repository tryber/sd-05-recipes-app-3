// Cesar me explicou
import React from 'react';
import PropTypes from 'prop-types';
import copy from 'clipboard-copy';
import shareIcon from '../../images/shareIcon.svg';

function copyToClipboard(url, id) {
  console.log(url);
  document.getElementById(`share-button-${id}`).innerHTML = 'Link copiado!';
  if (url.includes('comida')) {
    copy(`http://localhost:3000/comidas/${id}`)
    .then(() => alert('Link copiado'));
  }
  if (url.includes('bebida')) {
    copy(`http://localhost:3000/bebidas/${id}`)
    .then(() => alert('Link copiado'));
  }
}
// honestidade acadêmica: ajuda do grupo 4

function ShareButton(props) {
  const { id, url, literals, alt } = props;
  return (
    <div className="icon">
      <input
        id={`share-button-${id}`}
        style={{ textDecoration: 'none' }}
        type="image"
        src={shareIcon}
        alt={alt}
        data-testid={literals}
        onClick={() => copyToClipboard(url, id)}
      />
    </div>
  );
}

export default ShareButton;

ShareButton.propTypes = {
  url: PropTypes.shape({
    location: PropTypes.string.isRequired,
  }).isRequired,
  id: PropTypes.number.isRequired,
  literals: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
