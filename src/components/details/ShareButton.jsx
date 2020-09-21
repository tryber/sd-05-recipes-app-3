// Cesar me explicou
import React from 'react';
// import PropTypes from 'prop-types';
import { copy } from 'clipboard-copy';

import shareIcon from '../../images/shareIcon.svg';

function copyToClipboard(text) {
  if (!text) copy(text);
  // console.log('escopo da funcao copy:', copy(), 'chamada da funcao copy():', copy(text));
  return alert('Link copiado!');
}

function ShareButton(props) {
  const { alt = 'share-recipe', idx = '', url = `/comidas/0`, literals } = props;
// console.log(alt, url) ;
  return (
    <div className="icon-share">
      <img
        style={{ textDecoration: 'none' }}
        type="image"
        src={shareIcon}
        alt={`${alt} share-btn`}
        data-testid={`${idx}${literals}`}
        value={url}
        onClick={({ target }) => copyToClipboard(target.value)}
      />
    </div>
  );
}
// [data-testid="0-horizontal-share-btn"]

export default ShareButton;

// ShareButton.propTypes = {
//   url: PropTypes.shape({
//     location: PropTypes.string.isRequired,
//   }).isRequired,
// };
