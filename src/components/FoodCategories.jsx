import React, { useEffect } from 'react';
import { mealsCategories } from '../service/apis';
import { useContext } from 'react';
import RecipeContext from '../context/RecipeContext';

function FoodCategories() {
  const { categories, setCategories } = useContext(RecipeContext);
    
  useEffect(
    () => {
        mealsCategories()
          .then((response) => setCategories(response.meals))
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

export default FoodCategories;
