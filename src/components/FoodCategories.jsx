import React, { useEffect, useContext } from 'react';
import { mealsCategories } from '../service/apis';
import RecipeContext from '../context/RecipeContext';

function FoodCategories() {
  const { categories, setCategories } = useContext(RecipeContext);

  useEffect(() => {
    mealsCategories()
      .then((response) => setCategories(response.meals))
      .catch((error) => alert("Atualize a página", error));
  }, []);

  return (
    <div>
      {categories.map((category, index) => {
        return index <= 4 ? <p>{category.strCategory}</p> : null
      })}
    </div>
  );
}

export default FoodCategories;
