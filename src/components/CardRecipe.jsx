import React, { useContext } from 'react';
import RecipeContext from '../context/RecipeContext';

function CardRecipe() {
    const { details } = useContext(RecipeContext);
    const { strMealThumb, strMeal, strInstructions, strYoutube } = details[0];
    const recipeGetter = (ingredient) => {
      const items = Object.keys(ingredient)
        .filter((keysIngridients) => keysIngridients.includes('strIngredient'))
        .filter((value) => ingredient[value] !== '');
      const quantities = Object.keys(ingredient)
        .filter((qtIngridients) => qtIngridients.includes('strMeasure'))
        .filter((value) => ingredient[value] !== '');
      // construindo um array de ingredientes
      const allIngredients = items.map((value) => ingredient[value]);
      // construindo um array de medidas dos ingredientes
      const allMeasures = quantities.map((value) => ingredient[value]);
      return { allIngredients, allMeasures };
    };
    const { allIngredients, allMeasures } = recipeGetter(details[0]);
    // uma saida no console pra vc saber o que esta manipulado
    console.log(allIngredients, allMeasures);

    return(
      <div className="card-recipe">
        <img
          alt={strMeal}
          className="card-recipe-image"
          src={strMealThumb}
          data-testid="recipe-photo"
        />
        <div className="card-recipe-body">
          <h3 className="card-recipe-name" data-testid="recipe-title">
            {strMeal}
          </h3>
          <p data-testid="recipe-category">Categoria</p>
          <h4>Ingredients</h4>
          <p data-testid="0-ingredient-name-and-measure">
            {allIngredients.map((ingredient, i) => (
              <p>
                {ingredient} : {allMeasures[i]}
              </p>
            ))}
          </p>
          <h4>Instructions</h4>
          <p data-testid="instructions">{strInstructions}</p>
          <video width="320" height="240" controls>
            <source src={strYoutube} type="video/mp4" data-testid="video" />
          </video>
          </div>
          </div>
    );
    }

    export default CardRecipe;
