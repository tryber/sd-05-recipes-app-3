// doneREcipe
import React, { useContext, useEffect, useState } from 'react';
import Header from '../components/Header';
import FilterByType from '../components/details/FilterByType';
import FavoriteContext from '../context/FavoriteContext';
// import '../css/Header.css';
import '../css/favorite.css';
import { lookUpIdDrink, lookUpIdMeal } from '../service/apis';
import DoneCard from '../components/DoneCard';
// import { forEach } from 'lodash';

function putInStorage(doneRecipeId, set) {
  // console.log(doneRecipeId)
  let recipe = JSON.parse(localStorage.getItem('doneRecipes'));

  if (recipe) {
    recipe = recipe.filter((item) => item.id !== doneRecipeId.id);
    // let recipesIds = localStorage.getsettem('doneRecipes' || []);
    recipe = [...recipe, doneRecipeId];
    localStorage.setItem('doneRecipes', JSON.stringify(recipe));
    // return recipesIds;
  } else localStorage.setItem('doneRecipes', JSON.stringify([doneRecipeId]));
  console.log('doneRecipes:', recipe);
  setTimeout(() => set(true), 1500);
  return recipe;
}

const makeRequest = (array, set) => {
  if (array) {
    array.forEach((item) => {
      const { id, type, date } = item;
      // console.log(id, type);
      if (type === 'comida') {
        lookUpIdMeal(id)
          .then((food) => {
            // console.log(food)
            const {
              strMealThumb: image,
              strMeal: name,
              strCategory: category,
              strArea: area,
              strAlcoholic: alcoholicOrNot,
            } = food.meals[0];
            let { strTags: tags } = food.meals[0];
            if (tags !== null) tags = tags.split(',').slice(0, 2);
            putInStorage(
              { id, type, name, image, category, area, alcoholicOrNot, tags: [], doneDate: date },
              set
            );
          })
          .catch((error) => alert('comida', error));
      } else if (type === 'bebida') {
        lookUpIdDrink(id)
          .then((drink) => {
            const {
              strDrinkThumb: image,
              strDrink: name,
              strCategory: category,
              strArea: area,
              strAlcoholic: alcoholicOrNot,
            } = drink.drinks[0];
            let { strTags: tags } = drink.drinks[0];
            if (tags !== null) tags = tags.split(',').slice(0, 2);
            putInStorage(
              { id, type, name, image, category, area, alcoholicOrNot, tags: [], doneDate: date },
              set
            );
          })
          .catch((error) => alert('bebida', error));
      }
    });
  }
};

const mapRecipe = (recipes) =>
  recipes.map((item, idx) => (
    <DoneCard
      index={idx}
      id={item.id}
      type={item.type}
      area={item.area}
      category={item.category}
      alcoholic={item.alcoholicOrNot}
      name={item.name}
      image={item.image}
      url={item}
      date={item.doneDate}
      tags={item.tags}
    />
  ));

function DoneRecipes() {
  const { readFromStorage } = useContext(FavoriteContext);
  const [recipes, setRecipes] = useState(readFromStorage('doneRecipes'));
  const [reload, setReload] = useState(false);
  // let { match: { params: { idRecipe }, url }, type, id } = props;
  console.log('a ser renderizado:', recipes);
  // let aux = recipes;
  useEffect(() => {
    const doneRecipe = readFromStorage('idDoneRecipes');
    console.log('receita', doneRecipe);
    makeRequest(doneRecipe, setReload);
    setRecipes(readFromStorage('doneRecipes'));
  }, [reload]);
  const handletype = (type) => {
    if (recipes) {
      switch (type) {
        case 'comida':
          return setRecipes(readFromStorage('doneRecipes').filter((caso) => caso.type === type));
        case 'bebida':
          return setRecipes(readFromStorage('doneRecipes').filter((caso) => caso.type === type));
        default:
          return setRecipes(readFromStorage('doneRecipes'));
      }
    }
  };
  return (
    <div className="body">
      <Header title="Receitas Feitas" />
      <div className="body-page">
        {/* <p>Tela de Receitas Favoritas</p> */}
        <FilterByType func={handletype} />
        {!recipes ? (
          <div>
            <p>Você não tem nenhuma receita favoritada!</p>
          </div>
        ) : (
          mapRecipe(recipes)
        )}
      </div>
    </div>
  );
}

export default DoneRecipes;
