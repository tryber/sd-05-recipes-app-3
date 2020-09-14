import React, { useEffect, useContext, useState } from 'react';
import { mealsCategories, mealCategoryFilter, allMealsList } from '../service/apis';
import RecipeContext from '../context/RecipeContext';
import RadioInput from './RadioInput';

function FoodCategories() {
  const { categories, setCategories, setData } = useContext(RecipeContext);
  const [radio, setRadio] = useState('All');

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

  const handleChange = ({ target }) => {
    if (target.value !== radio && target.value !== 'All') {
      setRadio(target.value);
      handleFilter(target.value);
    } else if (target.value === radio || target.value === 'All') {
      setRadio('All');
      allMealsList()
        .then((response) => setData(response.meals))
        .catch((error) => alert('Algo inesperado aconteceu:', error));
    }
  };

  return (
    <div>
      {categories.map((category, i) =>
        (i <= 4 ? (
          <RadioInput
            data-testid={`${category}-category-filter`}
            value={category.strCategory}
            onChange={handleChange}
            validation={radio}
          />
        ) : null
      ))}
      <RadioInput data-testid="All-category-filter" value="All" onChange={handleChange} validation={radio} />
    </div>
  );
}

export default FoodCategories;
