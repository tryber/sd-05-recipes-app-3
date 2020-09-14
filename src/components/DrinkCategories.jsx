import React, { useEffect, useContext, useState } from 'react';
import { drinkCategories, drinkCategoryFilter, allDrinksList } from '../service/apis';
import RecipeContext from '../context/RecipeContext';
import RadioInput from './RadioInput';

function DrinkCategories() {
  const { categories, setCategories, setData } = useContext(RecipeContext);
  const [radio, setRadio] = useState('');
  const [clicked, setClicked] = useState(false);

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
    if (!clicked) {
    setRadio(target.value);
    handleFilter(target.value);
    setClicked(true);
    } 
    else if (clicked) {
      setRadio('');
      allDrinksList()
        .then((response) => setData(response.drinks))
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

export default DrinkCategories;
