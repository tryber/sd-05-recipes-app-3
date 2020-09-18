import React, { useEffect, useContext } from 'react';
import Header from '../components/Header';
import FilterByType from '../components/details/FilterByType';
import FavoriteCard from '../components/details/FavoriteCard';

import '../css/Header.css';
import FavoriteContext from '../context/FavoriteContext';
import RecipeContext from '../context/RecipeContext';


function FavoriteRecipes() {
  const { loadFromStorage } = useContext(FavoriteContext);
  const { email } = useContext(RecipeContext);
  const recipes = loadFromStorage();
  console.log(recipes, email);
  return (!recipes) ? (
  <div>
    <p>Você não tem nenhuma recipa favoritada!</p>
  </div>
  ):(
    <div className="">
      <Header title="Receitas Favoritas" />
      <div className="body-page">
        <p>Tela de Receitas Favoritas</p>
        <FilterByType func={"handleClick"} />
        {recipes.map(( item , idx, array) => (
          <FavoriteCard
            index={idx}
            id={item.id}
            image={item.image}
            name={item.name}
            type={item.type}
            area={item.area}
            category={item.category}
            alcoholicOrNot={item.alcoholicOrNot}
            recipes={array}
          />
        ))}
      </div>
    </div>
);
}
export default FavoriteRecipes;
