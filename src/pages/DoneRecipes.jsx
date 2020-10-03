// doneREcipe
import React, { useContext, useEffect, useState } from 'react';
import Header from '../components/Header';
import FilterByType from '../components/details/FilterByType';
import FavoriteContext from '../context/FavoriteContext';
import '../css/favorite.css';
import { lookUpIdDrink, lookUpIdMeal } from '../service/apis';
import DoneCard from '../components/DoneCard';
//
const putInStorage = async ({ objeto, setReload, recipes }) => {
  let doneRecipe = JSON.parse(localStorage.getItem('doneRecipes'));

  if (doneRecipe) {
    doneRecipe = doneRecipe.filter((item) => item.id !== objeto.id);
    doneRecipe = [...doneRecipe, objeto];
    localStorage.setItem('doneRecipes', JSON.stringify(doneRecipe));
  } else localStorage.setItem('doneRecipes', JSON.stringify([objeto]));
  setReload(doneRecipe > recipes);
};

const makeRequest = (setReload, recipes) => {
  const doneRecipe = JSON.parse(localStorage.getItem('idDoneRecipes'));
  if (doneRecipe) {
    doneRecipe.forEach((item) => {
      const { id, type, date } = item;
      const objeto = {
        id,
        type,
        name: '',
        image: '',
        category: '',
        area: '',
        alcoholicOrNot: '',
        tags: [],
        doneDate: date,
      };
      if (type === 'comida') {
        lookUpIdMeal(id)
          .then((food) => {
            const { strMealThumb, strMeal, strCategory, strArea, strAlcoholic } = food.meals[0];
            let { strTags: tags } = food.meals[0];
            if (tags !== null) tags = tags.split(',').slice(0, 2);
            objeto.name = strMeal;
            objeto.image = strMealThumb;
            objeto.category = strCategory;
            objeto.area = strArea;
            objeto.alcoholicOrNot = strAlcoholic;
            objeto.tags = tags;
            //
            return { objeto, setReload, recipes };
          })
          .then((obj) => putInStorage(obj))
          .catch((error) => console.log('erro na requisicao de receita de comida', error));
      } else if (type === 'bebida') {
        lookUpIdDrink(id)
          .then((drink) => {
            const { strDrinkThumb, strDrink, strCategory, strArea, strAlcoholic } = drink.drinks[0];
            let { strTags: tags } = drink.drinks[0];
            if (tags !== null) tags = tags.split(',').slice(0, 2);
            objeto.name = strDrink;
            objeto.image = strDrinkThumb;
            objeto.category = strCategory;
            objeto.area = strArea;
            objeto.alcoholicOrNot = strAlcoholic;
            objeto.tags = tags;
            return { objeto, setReload, recipes };
          })
          .then((obj) => putInStorage(obj))
          .catch((error) => console.log('erro na requisicao de receita de bebida', error));
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
      date={item.doneDate}
      tags={item.tags}
    />
  ));

function DoneRecipes() {
  const { readFromStorage } = useContext(FavoriteContext);
  const [recipes, setRecipes] = useState(JSON.parse(localStorage.getItem('doneRecipes')));
  const [reload, setReload] = useState(false);
  useEffect(() => {
    makeRequest(setReload, recipes);
    if (reload) setRecipes(JSON.parse(localStorage.getItem('doneRecipes')));
  }, [reload]);
  //
  function handletype(type) {
    if (recipes !== null) {
      switch (type) {
        case 'comida':
          return setRecipes(readFromStorage('doneRecipes').filter((caso) => caso.type === type));
        case 'bebida':
          return setRecipes(readFromStorage('doneRecipes').filter((caso) => caso.type === type));
        default:
          return setRecipes(readFromStorage('doneRecipes'));
      }
    }
  }
  //
  return (
    <div className="body">
      <Header title="Receitas Feitas" />
      <div className="body-page">
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
