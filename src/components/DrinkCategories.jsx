import React, { useEffect, useContext, useState } from 'react';
import { drinkCategories, drinkCategoryFilter } from '../service/apis';
import RecipeContext from '../context/RecipeContext';
import RadioInput from './RadioInput';
import '../css/categories.css';

function DrinkCategories() {
  const { categories, setCategories, setData } = useContext(RecipeContext);
  const [radio, setRadio] = useState('');

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

  const handleChange = ({ target }) => {
    setRadio(target.value);
    handleFilter(target.value);
  };

  return (
    <div className="categories">
      {categories.map((category, i) => (
        (i <= 4) ? (
          <RadioInput
            data-testid={`${category}-category-filter`}
            value={category.strCategory}
            onChange={handleChange}
            validation={radio}
            classname="radioCategorie"
          />
        ) : null
      ))}
    </div>
  );
}

export default DrinkCategories;
