import React from 'react';
import '../../css/Categories.css';

function FilterByType(handleClick) {
  return (
    <div className="categories">
      <div className="favorite">
        <button
          type="button"
          key="All"
          data-testid="filter-by-all-btn"
          onClick={handleClick}
          // value={type}
        >
          All
        </button>
      </div>
      <div className="favorite">
        <button
          type="button"
          key="Food"
          data-testid="filter-by-food-btn"
          onClick={handleClick}
          // value={type}
        >
          Food
        </button>
      </div>
      <div className="favorite">
        <button
          type="button"
          key="Drink"
          data-testid="filter-by-drink-btn"
          onClick={handleClick}
          // value={type}
        >
          Drink
        </button>
      </div>
    </div>
  );
}
export default FilterByType;
