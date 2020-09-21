// Cesar me explicou
import React from 'react';
import copy from 'clipboard-copy';
import shareIcon from '../../images/shareIcon.svg';

function copyToClipboard() {
  document.getElementById('share-button').innerHTML = 'Link copiado!';
  return copy(window.location.href);
}
// honestidade acadêmica: ajuda do grupo 4

function ShareButton() {
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
        onClick={() => copyToClipboard()}
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
