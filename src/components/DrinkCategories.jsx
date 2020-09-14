import React, { useEffect } from 'react';
import { drinkCategories } from '../service/apis';
import { useContext } from 'react';
import RecipeContext from '../context/RecipeContext';

function DrinkCategories() {
  const { categories, setCategories } = useContext(RecipeContext);
    
  useEffect(
    () => {
        drinkCategories()
          .then((response) => setCategories(response.drinks))
          .catch((error) => alert('Atualize a página', error))
    },
    []
    );

   return (
     <div>
       {categories.map((category, index) => index <= 4 ? category.strCategory : null)}
     </div>
   )
  }

export default DrinkCategories;
