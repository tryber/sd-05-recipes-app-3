import React, { useEffect, useContext, useState } from 'react';
import { mealsCategories } from '../service/apis';
import RecipeContext from '../context/RecipeContext';
import RadioInput from './RadioInput';

function FoodCategories() {
  const { categories, setCategories } = useContext(RecipeContext);
  const [radio, setRadio] = useState('');

  useEffect(() => {
    mealsCategories()
      .then((response) => setCategories(response.meals))
      .catch((error) => alert('Atualize a página', error));
  }, []);

  return (
    <div>
      {categories.map((category, i) =>
        i <= 4 ? (
          <RadioInput
            data-testid={`${category}-category-filter`}
            value={category.strCategory}
            handleChange={setRadio}
            validation={radio}
          />
        ) : null
      )}
    </div>
  );
}

export default FoodCategories;
