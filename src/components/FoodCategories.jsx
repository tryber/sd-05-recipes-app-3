import React, { useEffect, useContext, useState } from 'react';
import { mealsCategories, mealCategoryFilter, allMealsList } from '../service/apis';
import RecipeContext from '../context/RecipeContext';
import RadioInput from './RadioInput';

function FoodCategories() {
  const { categories, setCategories, setData } = useContext(RecipeContext);
  const [radio, setRadio] = useState('');
  const [clicked, setClicked] = useState(false);

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
    if (!clicked) {
    setRadio(target.value);
    handleFilter(target.value);
    setClicked(true);
    } 
    else if (clicked) {
      setRadio('');
      allMealsList()
        .then((response) => setData(response.meals))
        .catch((error) => alert('Algo inesperado aconteceu:', error));
      setClicked(false);
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
    </div>
  );
}

export default FoodCategories;
