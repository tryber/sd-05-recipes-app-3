import React from 'react';

function FilterByType(handleClick) {
  const byType = ['All', 'Food', 'Drink'];
  return (
    <div className="type-set">
      {byType.map((type) => (
        <div className="filter-type">
          <button
            type="button"
            key={type}
            data-testid={`${type}-category-filter`}
            onClick={handleClick}
            value={type}
          >
            {type}
          </button>
        </div>
      ))}
    </div>
  );
}
export default FilterByType;
