import React, { useEffect, useContext } from 'react';
import { drinkCategories } from '../service/apis';
import RecipeContext from '../context/RecipeContext';

function DrinkCategories() {
  const { categories, setCategories } = useContext(RecipeContext);

  useEffect(() => {
    drinkCategories()
      .then((response) => setCategories(response.drinks))
      .catch((error) => alert('Atualize a página', error));
  }, []);

  return (
    <div>
      {categories.map((category, i) => { return i <= 4 ? <p>{category.strCategory}</p> : null; })}
    </div>
  );
}

export default DrinkCategories;
