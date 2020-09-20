// Cesar me explicou
import React from 'react';
import PropTypes from 'prop-types';
import { copy } from 'clipboard-copy';

import shareIcon from '../../images/shareIcon.svg';

function copyToClipboard(text) {
  if (!text) copy(text);
  return alert('Link copiado!');
}

function ShareButton(props) {
  const { pathname } = props.url.location;
  console.log(pathname);

  return (
    <div className="icon">
      <input
        style={{ textDecoration: 'none' }}
        type="image"
        src={shareIcon}
        alt="Share Button"
        data-testid="share-btn"
        value={pathname}
        onClick={({ target }) => copyToClipboard(target.value)}
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
