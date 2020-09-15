import React, { useEffect, useContext } from 'react';
import { drinkCategories, drinkCategoryFilter, allDrinksList } from '../service/apis';
import RecipeContext from '../context/RecipeContext';

function DrinkCategories() {
  const { categories, setCategories, setData, category, setCategory } = useContext(RecipeContext);

  useEffect(() => {
    drinkCategories()
      .then((response) => setCategories(response.drinks))
      .catch((error) => alert('Atualize a página', error));
  }, []);

  const handleFilter = (filter) => {
    drinkCategoryFilter(filter)
    .then((response) => setData(response.drinks))
    .catch((error) => alert('Atualize a página', error));
  };

  const handleClick = ({ target }) => {
    if (target.value !== category && target.value !== 'All') {
      setCategory(target.value);
      handleFilter(target.value);
    } else if (target.value === category || target.value === 'All') {
      setCategory('All');
      allDrinksList()
        .then((response) => setData(response.drinks))
        .catch((error) => alert('Algo inesperado aconteceu:', error));
    }
  };

  return (
    <div>
      {categories.map((category, i) =>
        (i <= 4 ? (
          <button
            type="button"
            key={category.strCategory}
            data-testid={`${category.strCategory}-category-filter`}
            onClick={handleClick}
            value={category.strCategory}
          >{category.strCategory}</button>
        ) : null
      ))}
      <button
        type="button"
        data-testid="All-category-filter"
        value="All"
        onClick={handleClick}
      >All</button>
    </div>
  );
}

export default DrinkCategories;
