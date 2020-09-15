import React, { useEffect, useContext } from 'react';
import { mealsCategories, mealCategoryFilter, allMealsList } from '../service/apis';
import RecipeContext from '../context/RecipeContext';

function FoodCategories() {
  const { categories, setCategories, setData, category, setCategory } = useContext(RecipeContext);

  useEffect(() => {
    mealsCategories()
      .then((response) => setCategories(response.meals))
      .catch((error) => alert('Atualize a página', error));
  }, []);

  const handleFilter = (filter) => {
    mealCategoryFilter(filter)
      .then((response) => setData(response.meals))
      .catch((error) => alert('Atualize a página', error));
  };

  const handleClick = ({ target }) => {
    if (target.value !== category && target.value !== 'All') {
      setCategory(target.value);
      handleFilter(target.value);
    } else if (target.value === category || target.value === 'All') {
      setCategory('All');
      allMealsList()
        .then((response) => setData(response.meals))
        .catch((error) => alert('Algo inesperado aconteceu:', error));
    }
  };

  return (
    <div>
      {categories.map((categ, i) =>
        (i <= 4 ? (
          <button
            type="button"
            data-testid={`${categ.strCategory}-category-filter`}
            value={categ.strCategory}
            onClick={handleClick}
          >{categ.strCategory}</button>
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

export default FoodCategories;
