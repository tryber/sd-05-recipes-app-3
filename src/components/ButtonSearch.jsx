import React from 'react';
import PropTypes from 'prop-types';

function ButtonSearch(props) {
  const { onClick } = props;
  return (
    <button
      data-testid="exec-search-btn"
      type="button"
      onClick={onClick}
    >
    Buscar
    </button>
  );
}

export default ButtonSearch;

ButtonSearch.propTypes = {
  onClick: PropTypes.func.isRequired,
};
