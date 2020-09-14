import React, { useEffect } from 'react';
import { drinkCategories, mealsCategories } from '../service/apis';
import { useContext } from 'react';
import RecipeContext from '../context/RecipeContext';

function Categories() {
  const { page, categories, setCategories } = useContext(RecipeContext);
    
  useEffect(
    () => {
      if (page === 'MainFood') {
        mealsCategories()
          .then((response) => setCategories(response.meals))
          .catch((error) => alert('Atualize a página', error))
      }
      
      if (page === 'MainDrink') {
        drinkCategories()
          .then((response) => setCategories(response.drinks))
          .catch((error) => alert('Atualize a página', error));
      }
    },
    [ page ]
    );

    /* useEffect(() => {
      function handleStatusChange() {
        setPage(page);
      }
    },[page]); */

   return (
     <div>
       {categories.map((category, index) => index <= 4 ? category.strCategory : null)}
     </div>
   )
  }

export default Categories;
