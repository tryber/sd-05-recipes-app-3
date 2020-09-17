import React from 'react';
import PropTypes from 'prop-types';
import { copy } from 'clipboard';
import { shareIcon } from '../../index';

function copiar(texto) {
  if (!texto) copy(texto);
  return alert('Link copiado');
}

function ShareButton(props) {
  const { endereco } = props.url.location;
  return (
    <input type="image" src={shareIcon} alt="share" data-testid="share-btn" onClick={() => copiar(endereco)} />
  );
}

export default shareButton;

ShareButton.propTypes = {
  url: PropTypes.shape({
    location: PropTypes.string.isRequired,
  }).isRequired,
};
