import React from 'react';

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
